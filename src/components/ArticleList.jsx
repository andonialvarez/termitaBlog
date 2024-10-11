import React from 'react';

export const ArticleList = ({articles}) => {
    return (
        <div className='article-list'>
            {articles.map(article => (
                <div className='article-container' key={article.id}>
                    <div className='img-container'>
                    <img src={article.thumb_image_url} alt= {article.featured_image} />
                    </div>
                     <div className='article-body'>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <div className='article-footer'>
                            <span>{article.content}</span>
                            <span>{article.blog_status}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}