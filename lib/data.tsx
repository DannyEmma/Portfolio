import { Project, Work } from "./types"

export const projects: Project[] = [
  {
    name: "wingrun",
    description: (
      <p>
        <span className="text-white">WingRun</span> est une plateforme spécialisée dans la vente de{" "}
        <span className="text-white">sneakers</span> en ligne. Elle permet aux utilisateurs de découvrir une sélection de modèles,
        d’effectuer leurs achats facilement et de consulter l'historique de leurs commandes, tout en bénéficiant d’une expérience fluide,
        claire et sécurisée.
      </p>
    ),
    tecks: ["react", "nextjs", "prisma", "stripe", "better-auth"],
    features: (
      <ul>
        <li>
          📦 <span className="font-medium text-white">Catalogues de produits</span>{" "}
          <span>
            — Présente l’ensemble des articles disponibles avec leurs descriptions, visuels, prix et caractéristiques, afin de faciliter le
            choix des clients.
          </span>
        </li>
        <li>
          🔍 <span className="font-medium text-white">Recherche et filtres avancés</span>{" "}
          <span>
            — Permet aux utilisateurs de trouver rapidement des produits spécifiques en affinant les résultats selon divers critères comme
            la marque, la couleur ou encore le prix.
          </span>
        </li>
        <li>
          🛒 <span className="font-medium text-white">Panier d'achat</span>{" "}
          <span>— Offre la possibilité de sélectionner, modifier et consulter les articles choisis avant de finaliser la commande.</span>
        </li>
        <li>
          ✅ <span className="font-medium text-white">Paiment sécurisé</span>{" "}
          <span>
            — Intègre un système de paiement Stripe, incluant un environnement de test utilisant des coordonnées bancaires fictives.
          </span>
        </li>
        <li>
          👤 <span className="font-medium text-white">Compte client</span>{" "}
          <span>
            — Permet aux utilisateurs de gérer leurs informations personnelles, telles que l’adresse e-mail, le numéro de téléphone et
            l’adresse de livraison, ainsi que de consulter l’historique et la liste de leurs commandes.
          </span>
        </li>
      </ul>
    ),
    capturesPath: [
      "/captures/wingrun/capture-1.png",
      "/captures/wingrun/capture-2.png",
      "/captures/wingrun/capture-3.png",
      "/captures/wingrun/capture-4.png",
      "/captures/wingrun/capture-5.png",
      "/captures/wingrun/capture-6.png",
      "/captures/wingrun/capture-7.png",
    ],
    gitRepoUrl: "https://github.com/DannyEmma/WingRun",
    siteUrl: "https://wing-run.vercel.app/",
  },
  {
    name: "lixa",
    description: (
      <p>
        <span className="text-white uppercase">Lixa</span> est une application d’analyse de texte intelligente qui aide à mieux comprendre,
        structurer et améliorer un contenu écrit. En s’appuyant sur <span className="text-white">l’intelligence artificielle</span>, elle
        fournit des informations claires sur la qualité, la lisibilité et la pertinence d’un texte, afin d’accompagner l’utilisateur dans
        son amélioration.
      </p>
    ),
    tecks: ["react", "nextjs", "typescript", "mistralai"],
    features: (
      <ul className="space-y-2">
        <li>
          📊 <span className="font-medium text-white">Compteur</span> <span> — Affiche le nombre de lettres, de mots et de phrases.</span>
        </li>
        <li>
          📈 <span className="font-medium text-white">Analyse des densités</span>
          <span> — Observez les densités de mots et de lettres via Mistral AI.</span>
        </li>
        <li>
          📚 <span className="font-medium text-white">Indice LIX (Läsbarhetsindex)</span>
          <span> — Cet indice permet de mesurer la complexité de votre texte.</span>
        </li>
        <li>
          ✂️ <span className="font-medium text-white">Résumé</span>
          <span> — Mistral AI résume votre texte selon la longueur et la complexité souhaitées.</span>
        </li>
      </ul>
    ),
    capturesPath: [
      "/captures/lixa/capture-1.png",
      "/captures/lixa/capture-2.png",
      "/captures/lixa/capture-3.png",
      "/captures/lixa/capture-4.png",
      "/captures/lixa/capture-5.png",
    ],
    gitRepoUrl: "https://github.com/DannyEmma/LixA",
    siteUrl: "https://lixa.vercel.app",
  },
  {
    name: "news",
    description: (
      <p>
        <span className="text-white uppercase">News</span> est un média de diffusion offrant aux utilisateurs un accès centralisé à
        <span className="text-white"> l'information internationale</span>. Les contenus sont organisés par thème pour faciliter la lecture
        et la découverte. Elle propose une <span className="text-white">expérience intuitive</span> et agréable, permettant de
        <span className="text-white"> naviguer facilement</span> à travers différents sujets et de trouver rapidement les informations
        pertinentes.
      </p>
    ),
    tecks: ["react", "mediastack"],
    features: (
      <ul className="space-y-2">
        <li>
          📰 <span className="font-medium text-white">Diffusion d’actualités </span>
          <span>— Fil d’actualités permettant de rester connecté à l’international.</span>
        </li>
        <li>
          🏷️ <span className="font-medium text-white">Segments thématiques </span>
          <span>— Articles organisés par catégories : Divertissement, Entreprise, Politique, Santé, Science, Sports et Technologie.</span>
        </li>
        <li>
          🔍 <span className="font-medium text-white">Recherche d’articles </span>
          <span>— Possibilité de retrouver facilement des informations via une barre de recherche.</span>
        </li>
      </ul>
    ),
    capturesPath: [
      "/captures/news/capture-1.png",
      "/captures/news/capture-2.png",
      "/captures/news/capture-3.png",
      "/captures/news/capture-4.png",
      "/captures/news/capture-5.png",
    ],
    gitRepoUrl: "https://github.com/DannyEmma/News",
    siteUrl: "https://news-one-coral.vercel.app",
  },
  {
    name: "todolist",
    description: (
      <p>
        Ce projet est une application de <span className="text-white">gestion de tâches</span> conçue pour aider les utilisateurs à
        organiser leur quotidien de manière simple et efficace. Elle offre une <span className="text-white">interface intuitive </span>
        permettant de suivre ses tâches, prioriser ses activités et améliorer sa productivité au quotidien. L’application est idéale pour
        toute personne souhaitant garder un suivi clair de ses projets et objectifs personnels.
      </p>
    ),
    tecks: ["react"],
    features: (
      <ul className="space-y-2">
        <li>
          📝 <span className="font-medium text-white">Gestion des tâches </span> <span>— Ajout, modification et suppression.</span>
        </li>
        <li>
          🗂️ <span className="font-medium text-white">Filtrage des tâches</span>
          <span>— Les tâches actives et complétées peuvent être affichées séparément.</span>
        </li>
        <li>
          🔄 <span className="font-medium text-white">Réorganisation des tâches</span>
          <span>— Déplacer une tâche permet de modifier son ordre dans la liste.</span>
        </li>
      </ul>
    ),
    capturesPath: [
      "/captures/todolist/capture-1.png",
      "/captures/todolist/capture-2.png",
      "/captures/todolist/capture-3.png",
      "/captures/todolist/capture-4.png",
    ],
    gitRepoUrl: "https://github.com/DannyEmma/TodoList",
    siteUrl: "https://todo-list-neon-seven.vercel.app",
  },
]

export const works: Work[] = [
  {
    date: "2021 - 2022",
    workstation: "Développeur web front-end",
    company: "Digital 1to1",
    employmentType: "Alternance",
    description:
      "J’ai travaillé sur des projets web variés allant de la création de sites WordPress avec Elementor à des développements plus techniques, notamment un système de suivi de coureurs pour le SFR Grand Raid et une extension Chrome de comparaison de prix via EAN, ce qui m’a permis de développer ma polyvalence en développement web.",
  },
  {
    date: "Juin - Août (2021)",
    workstation: "Développeur web full-stack",
    company: "C'Consult",
    employmentType: "Alternance",
    description:
      "J’ai travaillé sur le développement d’outils et d’applications variées, allant d’un générateur de QR codes (simples et multiples via CSV) à une application bureau pour un parfumeur intégrant affichage dynamique et interface d’administration complète. J’ai également participé à la création de formulaires et d’un dashboard sur un CRM, ainsi qu’à l’intégration et l’exploitation de données via API.",
  },
  {
    date: "2018 - 2019",
    workstation: "Développeur web full-stack",
    company: "Curator Studio",
    employmentType: "Alternance",
    description:
      "J’ai contribué à la mise en place d’un site vitrine ainsi qu’à la maintenance et au débogage d’un logiciel existant, tout en assurant la mise en page de newsletters au format PDF. J’ai également participé à l’évolution du logiciel afin de répondre aux besoins spécifiques de certains clients.",
  },
  // {
  //   date: "Janvier - Mars (2015)",
  //   workstation: "Développeur web full-stack",
  //   company: "Net OI",
  //   employmentType: "Stage",
  //   description:
  //     "J’ai développé une fonctionnalité d’abonnement permettant aux clients de souscrire directement en ligne, tout en mettant en place un espace d’administration offrant la possibilité de configurer et gérer les différentes formules proposées.",
  // },
  // {
  //   date: "Juin 2014",
  //   workstation: "Développeur web full-stack",
  //   company: "RDSI",
  //   employmentType: "Stage",
  //   description: "Développement d’un site d’upload et de gestion de photos.",
  // },
]
