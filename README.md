# Teste-front-end-Chuva.Inc
Teste para vaga de estágio front-end Chuva.Inc

#### Desafio front-end para uma vaga de estágio na empresa Galoá https://galoa.com.br/ cujo objetivo era seguir o protótipo de um site que foi entregue no figma para servir como exemplo de modelo e adotando critérios de responsividade e comentários durante o desenvolvimento do código.

### Foram utilizados durante o projeto

#### HTML  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" title="HTML5" style="max-width: 100%;" width="40" height="30" align="middle">
#### CSS  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" title="CSS3" style="max-width: 100%;" width="40" height="30" align="middle">
#### JavaScript  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" style="max-width: 100%;" width="40" height="30" align="middle">

#### Com atualização futura, esse projeto vai ser refaturado em React  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="ReactJS" title="ReactJS" style="max-width: 100%;" width="40" height="30" align="middle">

#### Muito obrigado !!


### A seguir imagens de como ficou o desafio

=========================================================================

![img1](https://user-images.githubusercontent.com/78483210/136907806-6d5c798e-a81f-46e2-9acc-15409f808a72.png)

=========================================================================

![img2](https://user-images.githubusercontent.com/78483210/136908765-96edb1c3-baba-4e8f-bb9c-0fb910c6f181.png)

=========================================================================

![img3](https://user-images.githubusercontent.com/78483210/136908963-af9118c0-6f67-4037-9d09-e771831b6c81.png)

=========================================================================

![img5](https://user-images.githubusercontent.com/78483210/136908968-f9626ce4-3035-48e8-aea5-187379b5b0ea.png)

=========================================================================

![img6](https://user-images.githubusercontent.com/78483210/136908970-d4bffb40-69b5-4221-9599-3b65b4595070.png)

=========================================================================

![img7](https://user-images.githubusercontent.com/78483210/136908974-6f55d900-8cfc-4cdb-a183-293b03a41152.png)

=========================================================================

![img8](https://user-images.githubusercontent.com/78483210/136908980-c112528d-6e86-45b4-ad35-ad5092405bdd.png)

=========================================================================

![img9](https://user-images.githubusercontent.com/78483210/136908984-b486e0d2-adba-43ba-a11a-8d3d90398b43.png)

=========================================================================

### Um pouco dos trechos com alguns códigos do projeto

```

<main>
      <div class="title_main">
        <h1> Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do
          município
          de Campinas/SP </h1>
      </div>
      <div class="buttons">
        <a class="main-button" href=""><i class="fas fa-download"></i> Download </a>
        <a class="main-button" href=""><i class="fas fa-star"></i></a>
        <a class="main-button" href=""><i class="fas fa-star"></i></a>
      </div>
      <div class="image_main">
        <img class="video img-fluid" src="images/vídeo apresentação.png" alt="">
      </div>
      <div class="details">
        <div class="card_details">
          <div class="card_header">
            <h1>Detalhes</h1>
          </div>
          <div class="card_content">
            <div class="info">
              <p>Tipo de Apresentação: <span class="bold_info"> Pôster </span></p>
              <p>Eixo temático: <span class="bold_info"> Alimentação e saúde (AS) </span></p>
              <p>Palavras-chaves: <span class="bold_info"> Alimentos funcionais, alimentação escolar.
                </span></p>
            </div>
            
```
### Um pouco do estilo da página 

```

/* Estilo definido do footer e seus filhos com pequenos ajustes possíveis se necessario */
footer {
	width: 100%;
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: auto;
	grid-area: footer;
	padding: 1rem;
	font-family: 'Roboto', sans-serif;
}

.image_footer {
	width: 100%;
}

.image_footer img {
	width: 100%;
}

/* Estilizando o interact e seus filhos */
/* aside_header começa na linha 17 a 19 do html */ 
.aside_header {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(180deg, #FFB354 0%, #EE7A3A 100%);
}

/* aside_header h1 está na linha 18 do html*/
.aside_header h1 {
	font-size: 1.875rem;
	line-height: 2.188rem;
	font-weight: bold;
	font-family: 'Roboto', sans-serif;
	color: #FFFFFF;
}

```

### Um pouco do js

```
function changeCollapse() {
	isClicked = !isClicked;
	collapse(isClicked);
	if (isClicked == true) {
		document.querySelector('.summary').classList.add('summary_active');
	}
}

```

### @media queries

```
main {
		grid-template-columns: 3fr 1fr;
		grid-template-rows: auto 1fr auto;
		grid-template-areas:
			"title buttons"
			"image details"
			"more more"
		;
		grid-gap: 2rem;
		padding: 1.5rem 3rem;
	}

	footer {
		grid-template-columns: auto 1fr;
		grid-template-rows: 1fr;
	}

```



