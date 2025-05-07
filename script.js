document.addEventListener("DOMContentLoaded", () => {
    // Navigation
    const navLinks = document.querySelectorAll(".nav-link")
    const sections = document.querySelectorAll(".section")

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault()

            // Remove active class from all links and sections
            navLinks.forEach((link) => link.classList.remove("active"))
            sections.forEach((section) => section.classList.remove("active"))

            // Add active class to clicked link
            this.classList.add("active")

            // Get the target section and make it active
            const targetId = this.getAttribute("href").substring(1)
            document.getElementById(targetId).classList.add("active")
        })
    })

    // Photo upload functionality
    const photoPlaceholder = document.getElementById("photo")

    photoPlaceholder.addEventListener("click", () => {
        const input = document.createElement("input")
        input.type = "file"
        input.accept = "image/*"

        input.onchange = (e) => {
            const file = e.target.files[0]
            if (file) {
                const reader = new FileReader()

                reader.onload = (event) => {
                    photoPlaceholder.innerHTML = ""
                    photoPlaceholder.style.border = "none"
                    photoPlaceholder.style.backgroundImage = `url(${event.target.result})`
                    photoPlaceholder.style.backgroundSize = "cover"
                    photoPlaceholder.style.backgroundPosition = "center"
                }

                reader.readAsDataURL(file)
            }
        }

        input.click()
    })

    // Projetos - Agora definidos diretamente no JavaScript
    const projectsContainer = document.getElementById("projects-container")

    // Array de projetos com suporte para imagens e vídeos
    const projects = [
        {
            title: "Sistema de Gestão de Campanhas Publicitárias",
            description:
                "Aplicação web para gerenciar campanhas publicitárias em ônibus de Salvador, convertendo dados de planilhas Excel em um sistema interativo.",
            image: "./assets/projects/project1.jpg", // Caminho para a imagem
            // video: "./assets/projects/project1.mp4", // Opcional: caminho para vídeo
            github: "#",
            demo: "#",
        },
        {
            title: "Análise de Portfólio de Investimentos",
            description:
                "Sistema de análise de investimentos utilizando o modelo de Markowitz para otimização de portfólio com Python e bibliotecas de análise de dados.",
            image: "./assets/projects/project2.jpg",
            github: "#",
            demo: "#",
        },
        {
            title: "Landing Page Responsiva",
            description:
                "Design e desenvolvimento de landing page responsiva para empresa de tecnologia, utilizando HTML, CSS e JavaScript.",
            // Exemplo com vídeo em vez de imagem
            video: "./assets/projects/project3.mp4",
            github: "#",
            demo: "#",
        },
    ]

    // Função para criar cards de projetos com suporte a mídia (imagens ou vídeos)
    function createProjectCards() {
        projects.forEach((project) => {
            const card = document.createElement("div")
            card.className = "project-card"

            // Elemento de mídia (imagem ou vídeo)
            const mediaHTML = project.video
                ? `<div class="project-media">
             <video src="${project.video}" controls></video>
           </div>`
                : project.image
                    ? `<div class="project-media">
             <img src="${project.image}" alt="${project.title}">
           </div>`
                    : ""

            card.innerHTML = `
        ${mediaHTML}
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-links">
            <a href="${project.github}" class="project-link" target="_blank">
              <i class="fab fa-github"></i> GitHub
            </a>
            <a href="${project.demo}" class="project-link" target="_blank">
              <i class="fas fa-external-link-alt"></i> Demo
            </a>
          </div>
        </div>
      `

            projectsContainer.appendChild(card)
        })
    }

    // Inicializar os cards de projetos
    createProjectCards()
})
