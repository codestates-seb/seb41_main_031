package com.codestates.seb41_main_031.amoona.post.mapper;

import com.codestates.seb41_main_031.amoona.post.dto.*;
import com.codestates.seb41_main_031.amoona.post.entity.Post;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PostMapper {

    Post postPostDtoToPost(PostPostDto postPostDto);

    Post postPatchDtoToPost(PostPatchDto postPatchDto);

    default PostResponseDto postToPostResponseDto(Post post) {

        return new PostResponseDto(post.getPostId(), post.getMember().getMemberId(), post.getLocation(),
                post.getEvent(), post.getPlayerNum(), post.getDate(), post.getTime(), post.getLat(),
                post.getLng(), post.getCreatedAt(), post.getModifiedAt());
    }

    default PostDetailDto postToPostDetailDto(Post post){

        return new PostDetailDto(post.getPostId(), post.getMember().getNickname(), post.getMember().getImage(),
                post.getLocation(), post.getEvent(), post.getPlayerNum(), post.getDate(), post.getTime(),
                post.getLat(), post.getLng(), post.getJoinMembers());
    }

    List<PostListDto> postsToPostListDtos(List<Post> posts);
}
