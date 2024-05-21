import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../redux/action'; 
import './newslist.css';
const NewsList = ({news, loading, error, fetchNews}) => {
    useEffect(()=>{
        fetchNews();
    }, [fetchNews])
    if(loading){
        return<div>...Loading</div>
    }
    if(error){
        return<div>Error: {error}</div>
    }
    const limitedNews = news.slice(0,6);
    return (
        <div className='news-container'>
            {limitedNews.map((article, index) => (
                <div key={index} className='news-item'>
                    <h3 className='news-title'>{article.title}</h3>
                    <p className='news-description'>{article.description}</p>
                    <a href={article.url} className='read-more' target="_blank" rel="noopener noreferrer">
                        Read More
                    </a>
                </div>
            ))}
        </div>
    );
}


const mapStateToProps = (state) => ({
    news: state.news.news,
    loading: state.news.loading,
    error: state.news.error
});

const mapDispatchToProps = {
    fetchNews 
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
