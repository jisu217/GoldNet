// 외부 API 통신을 위한 RestTemplate을 빈(Bean)으로 등록하는 설정 클래스

package com.example.GOLDNet.global.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class AppConfig {

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}