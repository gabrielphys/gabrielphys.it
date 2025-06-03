const articles = [
    {
        id: "quantum-article",
        title: "Introduzione alla Meccanica Quantistica",
        content: "La meccanica quantistica è una branca della fisica che descrive il comportamento della materia e dell'energia a scale microscopiche..."
    },
    {
        id: "relativity-article",
        title: "La Relatività Generale Spiegata",
        content: "La relatività generale di Einstein ha rivoluzionato la nostra comprensione della gravità..."
    },
    {
        id: "astro-article",
        title: "I Buchi Neri: Misteri dell'Universo",
        content: "I buchi neri sono tra gli oggetti più affascinanti dell'universo..."
    }
];

function loadArticles() {
    const articleList = document.createElement("ul");
    articleList.className = "actions stacked";
    articles.forEach(article => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `#${article.id}`;
        a.className = "button fit";
        a.textContent = article.title;
        li.appendChild(a);
        articleList.appendChild(li);
    });
    document.getElementById("article-list").appendChild(articleList);

    articles.forEach((article, index) => {
        const styleClass = index % 2 === 0 ? "style2 right" : "style3 left";
        const articleSection = document.createElement("section");
        articleSection.id = article.id;
        articleSection.className = `spotlight ${styleClass}`;
        articleSection.innerHTML = `
            <span class="image fit main"><img src="images/${article.id.split('-')[0]}.jpg" alt="${article.title}" /></span>
            <div class="content">
                <header>
                    <h2>${article.title}</h2>
                </header>
                <p>${article.content}</p>
                <ul class="actions">
                    <li><a href="#two" class="button">Back to articles</a></li>
                </ul>
            </div>
            <a href="#${articles[index + 1]?.id || 'three'}" class="goto-next scrolly">Next</a>
        `;
        document.getElementById("two").insertAdjacentElement('afterend', articleSection);
    });
}

document.addEventListener("DOMContentLoaded", loadArticles);