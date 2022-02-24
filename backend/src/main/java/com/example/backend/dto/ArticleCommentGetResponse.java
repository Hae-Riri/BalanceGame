package com.example.backend.dto;

import com.example.backend.domain.ArticleComment;
import io.swagger.annotations.ApiModelProperty;
import java.time.format.DateTimeFormatter;
import lombok.Getter;

@Getter
public class ArticleCommentGetResponse {

    private static final String DATA_TIME_FORMAT = "yyyy.MM.dd hh:mm";
    @ApiModelProperty(value = "댓글 아이디", dataType = "Long", required = true, example = "1")
    private Long id;
    @ApiModelProperty(value = "댓글 내용", dataType = "String", required = true, example = "BackEnd")
    private String content;
    @ApiModelProperty(value = "댓글 등록일자", dataType = "String", required = true, example = "2022.02.22 14:30")
    private String createdAt;
    @ApiModelProperty(value = "댓글 수정일자", dataType = "String", required = true, example = "2022.02.27 12:20")
    private String modifiedAt;

    public ArticleCommentGetResponse(Long id, String content, String createdAt, String modifiedAt) {
        this.id = id;
        this.content = content;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;

    }

    public static ArticleCommentGetResponse of(ArticleComment articleComment) {
        String createdAt = articleComment.getCreatedAt().format(DateTimeFormatter.ofPattern(DATA_TIME_FORMAT));
        String modifiedAt = articleComment.getModifiedAt().format(DateTimeFormatter.ofPattern(DATA_TIME_FORMAT));
        return new ArticleCommentGetResponse(articleComment.getId(), articleComment.getContent(), createdAt,
            modifiedAt);
    }
}
