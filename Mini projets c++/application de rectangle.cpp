#include <iostream>;
#include <string>;
using namespace std;
struct Rectangle {
	float largeur, longeur;
};
void saisir(Rectangle& r) {
	cout << "Veuillez saisir la largeur du rectangle :";
	cin >> r.largeur;
	cout << "Veuillez saisir la longeur du rectangle :";
	cin >> r.longeur;
}
double CalculerPerimetre(Rectangle r) {
	double perimetre;
	perimetre = (r.largeur + r.longeur) / 2;
	return perimetre;
}
void Modifier(Rectangle &r) {
	Rectangle r2;
	char choix;
	cout << "Voulez-vous modifier la longeur (L) ou la largeur (l) :";
	cin >> choix;
	switch (choix)
	{
		case 'L':
			cout << "Veuillez saisir la longeur du rectangle :";
			cin >> r2.longeur;
			r.longeur = r2.longeur;
			break;
		case 'l':
			cout << "Veuillez saisir la largeur du rectangle :";
			cin >> r2.largeur;
			r.largeur = r2.largeur;
			break;
	default:
		cout << 0;
		break;
	}
}
double CalculerSurface(Rectangle r) {
	double surface;
	surface = (r.largeur * r.longeur);
	return surface;
}
void afficher(Rectangle r) {
	cout << "la longeur d\'un rectangle = " << r.longeur << endl;
	cout << "la largeur d\'un rectangle = " << r.largeur << endl;
}
int main() {
	Rectangle R;
	int choix;
	bool q = false;
	do
	{
		cout << "------------------------------------------------------------------- \n";
		cout << "\t Entrer votre choix" << endl;
		cout << "\t 1. Saisir longeur et la largeur d\'un rectangle " << endl;
		cout << "\t 2. modifier un longeur ou un largeur " << endl;
		cout << "\t 3. Afficher Les attributs d\'un rectangle " << endl;
		cout << "\t 4. Calculer Perimetre " << endl;
		cout << "\t 5. Calculer Surface " << endl;
		cout << "\t 6. Quitter " << endl;
		cout << "------------------------------------------------------------------- \n";
		cout << "Choisissez : ";
		cin >> choix;
		switch (choix)
		{
		case 1:
			saisir(R);
			break;
		case 2:
			Modifier(R);
			break;
		case 3:
			afficher(R);
			break;
		case 4:
			cout << "Le perimetre du rectrangle = " << CalculerPerimetre(R) << endl;
			break;
		case 5:
			cout << "La surface du rectrangle = " << CalculerSurface(R) << endl;
			break;
		case 6:
			q = true;
			break;
		default:
			cout << "Choix invalide." << endl;
			break;
		}
	} while (q == false);
}