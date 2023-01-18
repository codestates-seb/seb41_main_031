package com.codestates.seb41_main_031.amoona.post.mapper;

import com.codestates.seb41_main_031.amoona.post.dto.PostPatchDto;
import com.codestates.seb41_main_031.amoona.post.dto.PostPostDto;
import com.codestates.seb41_main_031.amoona.post.dto.PostResponseDto;
import com.codestates.seb41_main_031.amoona.post.entity.Post;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PostMapper {

    Post postPostDtoToPost(PostPostDto postPostDto);

    Post postPatchDtoToPost(PostPatchDto postPatchDto);

    PostResponseDto postToPostResponseDto(Post post);

    List<PostResponseDto> postsToPostResponseDtos(List<Post> posts);
}
