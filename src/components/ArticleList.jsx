import React from 'react';

export const ArticleList = ({ articles }) => {
    return (
        <div className='article-list'>
            {articles.map(article => (
                <div className='article-container' key={article?.id}>
                    <div className='category'>
                        <h2>{article?.titulo}</h2>
                    </div>
                    <div className='article-body'>
                        <h3>{article?.category}</h3>
                        <p>{article?.subtitulo}</p>
                        <div className='article-footer'>
                            <span>{article?.descripcion}</span>
                            <span>{article?.conclusion}</span>
                            <span>{article?.date}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
