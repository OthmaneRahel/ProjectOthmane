import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
import fileJson from './json/HH.json';

const Excel = () => {
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState('');
  // console.log(fileJson)
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setMessage('Veuillez sélectionner un fichier.');
      return;
    }
    setProcessing(true);
    setMessage('Conversion en cours...');
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const nomSociete = extractCompanyName(workbook);
      const xmlData = convertToXML(workbook);
      createZIP(xmlData, nomSociete);
    };
    reader.readAsArrayBuffer(file);
  };

  const extractCompanyName = (workbook) => {
    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
    const companyNameCell = firstSheet['D3'];
    if (companyNameCell && companyNameCell.v) {
      return companyNameCell.v.toString();
    } else {
      return 'Nom de la société par défaut';
    }
  };

  const convertToXML = (workbook) => {
    let xmlData = '<?xml version="1.0" encoding="UTF-8"?>\n<Liasse>\n';
    xmlData += `<!-- Partie 1 : En Tete  -->\n`;
    xmlData += `<!-- Identification du modele  -->\n`;
    xmlData += `<modele>\n`;
    xmlData += `<id>1</id>\n`;
    xmlData += `</modele>\n`;
    xmlData += `<resultatFiscal>\n`;

    const sheetNames = workbook.SheetNames;
    const worksheet = workbook.Sheets[sheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    const [identifiantFiscal, exerciceFiscalDu, exerciceFiscalAu] = jsonData[2];
    const identifiantFiscalEscaped = escapeXml(identifiantFiscal);
    const exerciceFiscalDuDate = XLSX.SSF.parse_date_code(exerciceFiscalDu);
    const exerciceFiscalAuDate = XLSX.SSF.parse_date_code(exerciceFiscalAu);
    const exerciceFiscalDuFormatted = formatDate(exerciceFiscalDuDate);
    const exerciceFiscalAuFormatted = formatDate(exerciceFiscalAuDate);
    xmlData += `<identifiantFiscal>${identifiantFiscalEscaped}</identifiantFiscal>\n`;
    xmlData += `<exerciceFiscalDu>${exerciceFiscalDuFormatted}</exerciceFiscalDu>\n`;
    xmlData += `<exerciceFiscalAu>${exerciceFiscalAuFormatted}</exerciceFiscalAu>\n`;
    xmlData += `</resultatFiscal>\n`;
    xmlData += `<!--  Partie 2 : Liasse Fiscale   -->\n`;
    xmlData += `<!--  Les valeurs de chaque tableau de la liasse   -->\n`;
    xmlData += `<groupeValeursTableau>\n`;
    const startingSheetIndex = 2; // Index du feuille
    fileJson.forEach((tableau, index) => {
        xmlData += `<ValeursTableau>\n`;
        xmlData += `<tableau><id>${tableau.id}</id></tableau>\n`; // Utilisation de l'ID du tableau depuis fileJson
        xmlData += `<groupeValeurs>\n`;
        const sheetName = sheetNames[index + startingSheetIndex];
        const worksheet = workbook.Sheets[sheetName];
        if (tableau.content && worksheet) {
            tableau.content.forEach((row) => {
                const cellIndex = row.index;
                const cellValue = (worksheet[cellIndex]) ? worksheet[cellIndex].v ?? '' : '';
                // const isStringValue = typeof cellValue === 'string';
                xmlData += `<ValeurCellule>\n`;
                xmlData += `<cellule>`;
                xmlData += `<codeEdi>${row.codeedi}</codeEdi>`;
                xmlData += `</cellule>\n`;
                // if (isStringValue) {
                //     xmlData += `<valeur> </valeur>\n`;
                // } else {
                    xmlData += `<valeur>${cellValue}</valeur>\n`;
                // }
                if (row.numeroligne !== 0) {
                    xmlData += `<numeroLigne>${row.numeroligne}</numeroLigne>\n`;
                }
                xmlData += `</ValeurCellule>\n`;
                console.log(`Valeur: ${cellValue}, Index: ${cellIndex}, Feuille: ${sheetName}`);
            });
        }else{
          xmlData += `<valeur> </valeur>\n`;
        }
        xmlData += `</groupeValeurs>\n`;
        if (tableau.extrafieldvaleurs !== null && tableau.extrafieldvaleurs.length > 0) {
          xmlData += `<extraFieldvaleurs>`;
          tableau.extrafieldvaleurs.forEach((e) => {
            const cellIndex = e.index;
            const sheetIndex = tableau.id;
            const sheetName = workbook.SheetNames[sheetIndex];
            const worksheet = workbook.Sheets[sheetName];
            if (worksheet && worksheet[cellIndex]) {
              const cellValue = worksheet[cellIndex].v ?? '';
              // const isStringValue = typeof cellValue === 'string';
              xmlData += `<ExtraFieldValeur>\n`;
              xmlData += `<extraField>\n`;
              xmlData += `<code>${e.codeedi}</code>\n`;
              xmlData += `</extraField>\n`;
              // if (isStringValue) {
                // xmlData += `<valeur> </valeur>\n`;
              // } else {
                xmlData += `<valeur>${cellValue}</valeur>\n`;
              // }
              xmlData += `</ExtraFieldValeur>\n`;
            }
          });
          xmlData += `</extraFieldvaleurs>\n`;
        } else {
          xmlData += `<extraFieldvaleurs> </extraFieldvaleurs>\n`;
        }
        xmlData += `</ValeursTableau>\n`;
    });
    xmlData += `</groupeValeursTableau>\n`;
    xmlData += `</Liasse>\n`;
    return xmlData;
};

  
  const formatDate = (date) => {
    const year = date.y;
    const month = (date.m < 10 ? '0' : '') + date.m;
    const day = (date.d < 10 ? '0' : '') + date.d;
    return `${year}-${month}-${day}`;
  };
  

  const createZIP = (xmlData, nomSociete) => {
    const zip = new JSZip();
    zip.file(`${nomSociete}.xml`, xmlData);
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, `${nomSociete}.zip`);
      setProcessing(false);
      setMessage('Téléchargement terminé.');
    }).catch((error) => {
      console.error(error);
      setProcessing(false);
      setMessage('Une erreur est survenue lors de la création du fichier ZIP.');
    });
  };


  const escapeXml = (str) => {
    if (typeof str !== 'string') {
      return str;
    }
    return str.replace(/[<>&'"]/g, (char) => {
      switch (char) {
        case '<':
          return '&lt;';
        case '>':
          return '&gt;';
        case '&':
          return '&amp;';
        case "'":
          return '&apos;';
        case '"':
          return '&quot;';
        default:
          return char;
      }
    });
  };
  return (
    <div>
      <h1 className='text-center text-light bg-success p-4'>Convertir Excel vers XML</h1>
      <div className='p-4'>
        <label style={{ fontSize: "25px" }} className='form-label'>Choisir le Fichier :</label>
        <input style={{ width: "40%" }} className='form-control' type="file" onChange={handleFileUpload} /><br/>
        {processing && <h4 className="text-info">Conversion en cours...</h4>}
        {message && <h4 className="text-success">{message}</h4>}
      </div>
    </div>
  );
};

export default Excel;