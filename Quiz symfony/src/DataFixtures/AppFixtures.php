<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Faker\Generator;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private Generator $faker;
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->faker = Factory::create("fr_FR");
        $this->hasher = $hasher;
    }

    public function load(ObjectManager $manager): void
    {
        $this->createUser($manager,"12345","RAHEL OTHMANE", "rahelothmane@gmail.com", ["ROLE_USER"], "password");
        $this->createUser($manager,"12345", "SAGHIR HIBA", "hiba.saghir@gmail.com", ["ROLE_ADMIN"], "password");
        $this->createUser($manager,"12345", "FATHI SALMA", "fathi.salma@gmail.com", ["ROLE_USER"], "password");

        // Persist all data in the database
        $manager->flush();
    }

    private function createUser(
        ObjectManager $manager,
        string $matricule,
        string $nomComplet,
        string $email,
        array $roles,
        string $plainPassword
    ): void {
        $user = new User();
        $user->setMatricule($matricule)
        ->setNomComplet($nomComplet)
            ->setEmail($email)
            ->setRoles($roles);

        // Hash the password
        $hashedPassword = $this->hasher->hashPassword($user, $plainPassword);
        $user->setPassword($hashedPassword);

        $manager->persist($user);
    }
}


