<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\UserRepository;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use App\Entity\Note;
use App\Entity\Courses;
use App\Form\RegisterFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UsersController extends AbstractController
{
    #[Route('/user', name: 'app_user_index',methods:["GET","POST"])]
    public function index(UserRepository $userRepository): Response
    {
        $user = $this->getUser(); // Récupérez l'utilisateur connecté

        return $this->render('User/index.html.twig', [
            'users' => $userRepository->findAll(),
            'admin' => $user,
            ]);
    }
    #[Route('/user/{id}', name: 'app_user_show', methods: ['GET'])]
    public function show($id, EntityManagerInterface $manager,UserRepository $userRepository): Response
    {
        $user = $userRepository->find($id);
        $notes = $manager->getRepository(Note::class)->findBy(['user' =>$user]);
    
        return $this->render('user/show.html.twig'
        , 
        [
            'user' => $user,
            'notes' => $notes,
        ]
    );
    }
    #[Route('/user/{id}/edit', name: 'app_user_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request,$id,UserRepository $userRepository, EntityManagerInterface $entityManager,UserPasswordHasherInterface $hasher): Response
    {
        $user = $entityManager->getRepository(User::class)->find($id);
        $form = $this->createForm(RegisterFormType::class, $user);
        $form->handleRequest($request);
        $existingUser = $userRepository->findOneBy(['matricule' => $user->getMatricule()]);

        if ($form->isSubmitted() && $form->isValid() ) {
            if ($existingUser && $existingUser !== $user) {

                $this->addFlash('error', 'Un utilisateur avec cette matricule existe déjà.');

                return $this->redirectToRoute('app_user_edit', ['id' => $user->getId()]);  
            }

            $user->setPassword($hasher->hashPassword($user, $user->getPassword()));
            $entityManager->flush();
             $this->addFlash('success', 'L\'utilisateur a été modifier avec succès.');
            return $this->redirectToRoute('app_user_index');
        }

        return $this->render('user/edit.html.twig', [
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }
    #[Route('/user/{id}', name: 'app_user_delete', methods: ['POST'])]
    public function delete(Request $request,$id, EntityManagerInterface $entityManager): Response
    {
        $user = $entityManager->getRepository(User::class)->find($id);
        $entityManager->remove($user);
        $entityManager->flush();
        $this->addFlash('success', 'L\'utilisateur a été supprimé avec succès.');
        return $this->redirectToRoute('app_user_index');
    }
    
}

