//creiamo la nostra lista di articoli 
import { useState } from 'react'
function ArticleList() {

    const oldArticle = ['AS Roma vince il derby', 'Il governo cade', 'Serve più lavoro ai giovani'];

    const [articles, setArticles] = useState(oldArticle);
    const [newArticles, setNewArticles] = useState('');

    const addArticle = e => {
        e.preventDefault();

        //non permettiamo all'utente di inserire stringhe vuote e preveniamo spazi all inizio e alla fine
        const cleanForm = newArticles.trim();
        if (!cleanForm) {
            return;
        }

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
                <div className="d-flex justify-content-center">
                    <form onSubmit={addArticle}>
                        <input type="text"
                            className="pe-5"
                            placeholder='Inserisci nuovo articolo'
                            value={newArticles}
                            onChange={(e) => { setNewArticles(e.target.value) }}
                        />
                        <button type='submit' className="btn">Inserisci un nuovo articolo</button>
                    </form>
                </div>

                {/* lista di articoli vecchi e nuovi */}
                <ul className="list-group pt-3 fs-4">
                    {articles.map((article, index) => (
                        <li className="list-group-item"
                            key={index}>
                            {article}
                            <span onClick={() => removeArticle(index)}>
                                <i className="fa-solid fa-trash float-end"></i>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ArticleList