document.addEventListener("DOMContentLoaded", () => {
  // etapa da troca preço
  const valueMap = {
    option1: "44,90",
    option2: "46,90",
    option3: "49,90",
    option4: "53,90",
    option5: "60,90",
  };

  const inputs = document.querySelectorAll('input[type="radio"]');

  // percorre os input
  inputs.forEach((input) => {
    // adiciona um evento de escuta ao change dos inputs
    input.addEventListener("change", () => {
      // obtem o valor selecionado do input
      const selectedValue = input.value;
      // atualiza o valor correto no span do price no html baseado na seleção dos inputs
      document.getElementById("price").innerHTML = valueMap[selectedValue];
    });
  });

  // etapa da imagem e textos
  const shirtImage = document.getElementById("shirtImage");
  const descriptionImage = document.getElementById("descriptionShirt");
  const upArrow = document.getElementById("up");
  const downArrow = document.getElementById("down");
  const nameShirt = document.getElementById("nameShirt");

  // array de objetos que contém as informações de cada camisa
  const imageUrls = [
    {
      url: "img/imperialshirt.webp",
      name: "Camisa da Imperial",
      description:
        "Camisa da IMPERIAL, The Last Dance, com nome personalizado, e número caso tenha interessel.",
    },
    {
      url: "img/furiashirt.webp",
      name: "Camisa da Fúria",
      description:
        "Camisa da Fúria, academia dos jovens, nome personalizado, e número caso tenha interesse. ",
    },
    {
      url: "img/skgamingshirt.webp",
      name: "Camisa da SK Gaming",
      description:
        "Camisa da SK Gaming, edição especial de quando o Brasil foi campeão do MAJOR, venha usar parte da história do CS brasileiro.",
    },
  ];
  //  estado inicial da imagem na pagina
  let currentImageIndex = 0;

  const changeImage = (increment) => {
    // função para trocar a imagem da camisa
    currentImageIndex =
      // atualiza o indice da imagem
      (currentImageIndex + increment + imageUrls.length) % imageUrls.length;
    // atualiza os atributos de imagem, descrição e nome da camisa, conforme listado no array acima
    shirtImage.src = imageUrls[currentImageIndex].url;
    nameShirt.textContent = imageUrls[currentImageIndex].name;
    descriptionImage.textContent = imageUrls[currentImageIndex].description;
  };
  // adiciona eventos de clique às setinhas e chama a função de troca de imagem
  upArrow.addEventListener("click", () => changeImage(1));
  downArrow.addEventListener("click", () => changeImage(-1));
});
