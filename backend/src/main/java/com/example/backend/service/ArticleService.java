package com.example.backend.service;

import com.example.backend.domain.Article;
import com.example.backend.domain.ArticleCategory;
import com.example.backend.dto.ArticlePostRequest;
import com.example.backend.repository.ArticleCategoryRepository;
import com.example.backend.repository.ArticleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class ArticleService {

    private final ArticleRepository articleRepository;
    private final ArticleCategoryRepository articleCategoryRepository;

    @Transactional
    public void createArticle(ArticlePostRequest articlePostRequest) {
        ArticleCategory articleCategory = articleCategoryRepository.findByName(
            articlePostRequest.getArticleCategoryName()).orElseThrow();
        Article article = articlePostRequest.toEntity(articleCategory);
        articleRepository.save(article);
    }
}
