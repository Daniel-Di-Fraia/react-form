//creiamo la nostra lista di articoli 
import { useState } from 'react'
function ArticleList() {

    const oldArticle = ['AS Roma vince il derby', 'Il governo cade', 'Serve più lavoro ai giovani'];

    const [articles, setArticles] = useState(oldArticle);
    const [newArticles, setNewArticles] = useState('');

    const addArticle = e => {
        e.preventDefault();

        // pulisco il form input per l'user
        const cleanForm = newArticles.trim();

        // creo un array nuovo per lo state
        const updatedArticles = [...articles, cleanForm];
        setArticles(updatedArticles);

        // ripuliamo campo user
        setNewArticles('');
    }

    //possibilità di rimuovere gli articoli di partenza e aggiunti dall'user
    const removeArticle = i => {
        const updatedArticles = articles.filter((articolo, articleIndex) => {
            return articleIndex !== i
        });
        setArticles(updatedArticles);
    }

    return (
        <>  
            {/* creazione del form */}
            <div className="container">
            <div className="ps-5 d-flex align-items-center">
            <form onSubmit={addArticle}>
                <input type="text"
                    className="pe-5"
                    placeholder='Inserisci un nuovo articolo'
                    value={newArticles}
                    onChange={(e) => { setNewArticles(e.target.value) }}
                />
                <button type='submit' className="btn">Inseriscilo!</button>
            </form>
            </div>

            {/* lista di articoli vecchi e nuovi */}
            <ul className="list-group ps-5 pt-3">
                {articles.map((article, index) => (
                    <li className="list-group-item"
                        key={index}>
                        {article}
                        <span onClick={() => removeArticle(index)}>
                            <i className="fa-solid fa-trash"></i>
                        </span>
                    </li>
                ))}
            </ul>
            </div>
        </>
    )
}

export default ArticleList