// 웹 크롤링으로 수집한 데이터를 전달하기 위한 DTO(Data Transfer Object) 클래스

package com.example.GOLDNet.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

public record CrawledDataDto(
        @JsonProperty("상세내용")
        String detailContent,

        @JsonProperty("구")
        String district
) {
}
