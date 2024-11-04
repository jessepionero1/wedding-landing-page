document.getElementById("menuIcon").addEventListener("click", function () {
  const nav = document.getElementById("mainNav");
  const menuIcon = document.getElementById("menuIcon");

  // Alternar o menu entre visível e invisível
  nav.classList.toggle("visible");

  // Alternar o ícone de menu quando o menu estiver aberto
  menuIcon.classList.toggle("open");
});

// Fechar o menu quando uma opção for clicada (mobile)
const menuLinks = document.querySelectorAll("#mainNav ul li a");
menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const nav = document.getElementById("mainNav");
    nav.classList.remove("visible"); // Fechar o menu
  });
});

document.getElementById("play-button").addEventListener("click", function () {
  const audio = document.getElementById("wedding-music");
  audio.play();
  document.getElementById("play-button").classList.add("hidden");
  document.getElementById("pause-button").classList.remove("hidden");
});

document.getElementById("pause-button").addEventListener("click", function () {
  const audio = document.getElementById("wedding-music");
  audio.pause();
  document.getElementById("pause-button").classList.add("hidden");
  document.getElementById("play-button").classList.remove("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("wedding-music");
  var playButton = document.getElementById("play-button");
  var pauseButton = document.getElementById("pause-button");

  // Função para iniciar a música e alternar os botões
  function startMusic() {
    audio.volume = 0.1;
    audio
      .play()
      .then(function () {
        playButton.classList.add("hidden");
        pauseButton.classList.remove("hidden");
      })
      .catch(function (error) {
        console.log(
          "O autoplay foi bloqueado até interação do usuário.",
          error
        );
      });
  }

  // Lidar com o clique no botão de play
  playButton.addEventListener("click", function () {
    startMusic();
  });

  // Lidar com o clique no botão de pause
  pauseButton.addEventListener("click", function () {
    audio.pause();
    pauseButton.classList.add("hidden");
    playButton.classList.remove("hidden");
  });

  // Adicionar suporte para interação (clique ou toque) para tocar a música
  document.addEventListener(
    "click",
    function () {
      startMusic();
    },
    { once: true }
  );

  document.addEventListener(
    "touchstart",
    function () {
      startMusic();
    },
    { once: true }
  );

  // Adicionar suporte para rolar a página (scroll) para tocar a música
  document.addEventListener(
    "scroll",
    function () {
      startMusic();
    },
    { once: true }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  var weddingDate = new Date(Date.UTC(2024, 10, 30, 17, 30, 0)).getTime();

  // Função que atualiza a contagem regressiva a cada segundo
  var countdownFunction = setInterval(function () {
    var now = new Date().getTime();
    var timeLeft = weddingDate - now;

    // Calcular dias, horas, minutos e segundos
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Exibir a contagem regressiva no HTML
    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML =
      hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML =
      minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML =
      seconds < 10 ? "0" + seconds : seconds;

    // Quando a contagem atingir zero
    if (timeLeft < 0) {
      clearInterval(countdownFunction); // Parar a contagem
      document.getElementById("countdown").innerHTML =
        "<p>¡Ya estamos casados!</p>"; // Mensagem final
    }
  }, 1000); // Atualiza a cada 1 segundo (1000 milissegundos)
});

function openGoogleMapsApp(destination) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        //const destination = 'EVENTOS+ROSEDAL+Cochabamba+Bolivia'; // Destino no Google Maps
        const url = `https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${destination}&travelmode=driving`;

        // Verifica se está no mobile para abrir no app do Google Maps
        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.location.href = url;
        } else {
          // Para desktop, abre o Google Maps no navegador
          window.open(url, "_blank");
        }
      },
      function (error) {
        alert(
          "Não conseguimos acessar sua localização. Por favor, tente novamente."
        );
      }
    );
  } else {
    alert("Seu navegador não suporta geolocalização.");
  }
}

// Função para adicionar o efeito "fade-in" ao rolar a página
document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Remove o observer após a animação
        }
      });
    },
    { threshold: 0.1 }
  ); // Quando 10% do elemento estiver visível

  fadeInElements.forEach((element) => {
    observer.observe(element);
  });
});

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevenir o comportamento padrão do link

    const targetId = this.getAttribute("href").substring(1); // Pegar o ID da seção
    const targetElement = document.getElementById(targetId);

    // Ajustar o scroll para compensar a altura do cabeçalho
    const cardMusicHeight =
      document.querySelector(".music-player").offsetHeight;

    const headerHeight = document.querySelector("header").offsetHeight;
    const targetPosition =
      targetElement.offsetTop - headerHeight - cardMusicHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth", // Rolagem suave
    });

    // Fechar o menu no mobile, se estiver aberto
    const nav = document.getElementById("mainNav");
    nav.classList.remove("visible");
  });
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzqeNMPTcaFII8iTxs6Ub-tP8z72oWxTPFfsV5DsRQmec8YzStp8nQRgYPX80zxsk4b/exec"; // URL do script App do Google que você criou

// Function to handle message submission
document
  .getElementById("messageEditForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("fromName").value.trim(); // Remove whitespace
    const message = document.getElementById("message").value.trim(); // Remove whitespace
    const submitButton = document.querySelector("button[type='submit']"); // Botão de envio

    // Simple validation
    if (!name || !message) {
      alert("Por favor, complete ambos campos antes de enviar.");
      return;
    }

    // Mostrar spinner e desabilitar botão
    submitButton.disabled = true;
    submitButton.innerHTML = 'Enviando... <span class="spinner"></span>'; // Atualiza o texto do botão e mostra o spinner

    fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "no-cors",
      body: JSON.stringify({ name, message }),
    })
      .then(() => {
        alert("Mensaje enviado con éxito!");
        loadMessages(); // Atualiza a lista de mensagens
        closeBtn.click();
        cleanForm();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error al enviar el mensaje. Intente nuevamente.");
      })
      .finally(() => {
        // Restaurar o botão após a resposta
        submitButton.disabled = false;
        submitButton.innerHTML = "Enviar Mensaje"; // Volta ao estado original do botão
      });
  });

// Elementos do DOM
var openFormBtn = document.getElementById("openFormBtn");
var formContainer = document.getElementById("edit-message-form");
var closeBtn = document.querySelector(".close-form");

// Mostrar o formulário quando clicar no botão
openFormBtn.onclick = function () {
  formContainer.classList.add("show");
  formContainer.classList.remove("hidden");
};

// Fechar o formulário ao clicar no botão de fechar (X)
closeBtn.onclick = function () {
  formContainer.classList.add("hidden");
  formContainer.classList.remove("show");
};

// Fechar o formulário ao clicar fora dele
window.onclick = function (event) {
  if (event.target == formContainer) {
    formContainer.classList.add("hidden");
    formContainer.classList.remove("show");
  }
};

// Elemento do textarea e do contador de caracteres
var messageInput = document.getElementById("message");
var charCount = document.getElementById("charCount");

// Definir o máximo de caracteres
var maxChars = 300;

// Função para atualizar o contador de caracteres
messageInput.addEventListener("input", function () {
  var currentLength = messageInput.value.length;
  charCount.textContent = currentLength + "/" + maxChars;

  // Se quiser adicionar uma indicação visual de que está atingindo o limite, pode ser assim:
  if (currentLength >= maxChars) {
    charCount.style.color = "red"; // Muda a cor quando atingir o limite
  } else {
    charCount.style.color = "black"; // Volta à cor normal
  }
});

const track = document.getElementById("carouselTrack");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

let currentIndex = 0;
let autoSlideInterval; // Variável para armazenar o intervalo automático

function updateCarousel() {
  const trackWidth = track.offsetWidth;
  track.style.transform = `translateX(-${currentIndex * trackWidth}px)`;
}

function moveToNextSlide() {
  const totalItems = track.children.length;
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

function moveToPrevSlide() {
  const totalItems = track.children.length;
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

// Função para iniciar o slide automático
function startAutoSlide() {
  stopAutoSlide(); // Parar qualquer slide anterior antes de iniciar um novo
  autoSlideInterval = setInterval(moveToNextSlide, 5000); // Muda de mensagem a cada 5 segundos
}

// Função para parar o slide automático (quando há interação)
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Adiciona eventos de clique para as setas de navegação
nextButton.addEventListener("click", () => {
  moveToNextSlide();
  startAutoSlide(); // Reiniciar o auto slide após interação
});

prevButton.addEventListener("click", () => {
  moveToPrevSlide();
  startAutoSlide(); // Reiniciar o auto slide após interação
});

// Função para carregar mensagens no carrossel
function loadMessages() {
  fetch(`${scriptURL}?action=read`)
    .then((response) => response.json())
    .then((data) => {
      const messageList = document.getElementById("carouselTrack");
      messageList.innerHTML = ""; // Limpa a lista anterior

      data.forEach((message) => {
        const div = document.createElement("div");
        div.className = "carousel-item message";
        div.innerHTML = `<h4>${message.nome}</h4><p>${message.mensagem}</p>`;
        messageList.appendChild(div);
      });

      updateCarousel(); // Atualiza o carrossel com as novas mensagens
      startAutoSlide(); // Inicia a rotação automática após carregar as mensagens
    });
}

// Iniciar o carregamento das mensagens
loadMessages();

function cleanForm() {
  document.getElementById("messageEditForm").reset();
  document.getElementById("charCount").textContent = "0/300";
}

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-slide-in");
      }
    });
  });

  const blessingSection = document.querySelector(".wedding-blessing");
  observer.observe(blessingSection);
});
