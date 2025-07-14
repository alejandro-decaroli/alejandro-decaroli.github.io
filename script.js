const translations = {
    es: {
        nav_home: 'Inicio',
        nav_about: 'Sobre Mí',
        nav_stack: 'Stack',
        nav_projects: 'Proyectos',
        nav_contact: 'Contacto',
        presentation: 'Apasionado por la programación y la Inteligencia Artificial, enfocado en crear soluciones inteligentes y eficientes a través de redes neuronales.',
        about_title: 'Sobre Mí',
        about_text: 'Soy un estudiante proactivo y desarrollador con una fuerte pasión por la tecnología y el aprendizaje continuo. Mi enfoque principal es el Machine Learning, donde busco aplicar mis habilidades para resolver problemas complejos y construir aplicaciones inteligentes. Constantemente estoy explorando nuevas herramientas y técnicas para mejorar mis conocimientos.',
        education_title: 'Educación',
        education_date: '(2022 - Presente)',
        certificates_title: 'Certificados y Cursos',
        cert1_title: 'Fundamentos de Redes Neuronales',
        stack_title: 'Stack Tecnológico',
        projects_title: 'Proyectos',
        project1_title: 'Regresión Lineal',
        project1_desc: 'Regresión lineal simple y múltiple con Scikit-learn sobre los datasets "Tips" y "Insurance" para predecir propinas y costes de seguros.',
        project2_title: 'Regresión Logística',
        project2_desc: 'Implementación de regresión logística simple y múltiple para problemas de clasificación.',
        repo_link: 'Ver en GitHub',
        contact_title: 'Contacto',
        location: 'Rosario, Argentina',
    },
    en: {
        nav_home: 'Home',
        nav_about: 'About Me',
        nav_stack: 'Stack',
        nav_projects: 'Projects',
        nav_contact: 'Contact',
        presentation: 'Passionate about programming and Artificial Intelligence, focused on creating smart and efficient solutions through neural networks.',
        about_title: 'About Me',
        about_text: 'I am a proactive student and developer with a strong passion for technology and continuous learning. My main focus is Machine Learning, where I seek to apply my skills to solve complex problems and build intelligent applications. I am constantly exploring new tools and techniques to improve my knowledge.',
        education_title: 'Education',
        education_date: '(2022 - Present)',
        certificates_title: 'Certificates & Courses',
        cert1_title: 'Fundamentals of Neural Networks',
        stack_title: 'Tech Stack',
        projects_title: 'Projects',
        project1_title: 'Linear Regression',
        project1_desc: 'Simple and multiple linear regression with Scikit-learn on the "Tips" and "Insurance" datasets to predict tips and insurance charges.',
        project2_title: 'Logistic Regression',
        project2_desc: 'Implementation of simple and multiple logistic regression for classification problems.',
        repo_link: 'View on GitHub',
        contact_title: 'Contact',
        location: 'Rosario, Argentina',
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    const navToggle = document.querySelector('.nav-toggle');
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('header nav a');

    // --- Theme Manager ---
    const setInitialTheme = () => {
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', savedTheme);
    };

    themeToggle.addEventListener('click', () => {
        let currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // --- Language Manager ---
    const setLanguage = (lang) => {
        document.querySelectorAll('[data-key]').forEach(elem => {
            const key = elem.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                elem.textContent = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);
        langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
    };

    langToggle.addEventListener('click', () => {
        const currentLang = localStorage.getItem('language') || 'es';
        const newLang = currentLang === 'es' ? 'en' : 'es';
        setLanguage(newLang);
    });

    // --- Initial Load ---
    setInitialTheme();
    const savedLang = localStorage.getItem('language') || 'es';
    setLanguage(savedLang);

    // --- Responsive Nav Manager ---
    navToggle.addEventListener('click', () => {
        header.classList.toggle('nav-open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (header.classList.contains('nav-open')) {
                header.classList.remove('nav-open');
            }
        });
    });
});
