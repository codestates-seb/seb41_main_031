package com.codestates.seb41_main_031.amoona.post.mapper;

import com.codestates.seb41_main_031.amoona.post.dto.*;
import com.codestates.seb41_main_031.amoona.post.entity.Post;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface PostMapper {

    Post postPostDtoToPost(PostPostDto postPostDto);

    Post postPatchDtoToPost(PostPatchDto postPatchDto);

    default PostResponseDto postToPostResponseDto(Post post) {

        return new PostResponseDto(
                post.getPostId(),
                post.getMember().getMemberId(),
                post.getLocation(),
                post.getEvent(),
                post.getPlayerNum(),
                post.getDate(),
                post.getTime(),
                post.getLat(),
                post.getLng(),
                post.getCreatedAt(),
                post.getModifiedAt());
    }

    default PostDetailDto postToPostDetailDto(Post post) {

        return new PostDetailDto(
                post.getPostId(),
                post.getLocation(),
                post.getEvent(),
                post.getJoinMembers().size(),
                post.getPlayerNum(),
                post.getDate(),
                post.getTime(),
                post.getLat(),
                post.getLng(),
                post.getJoinMembers());
    }

    default List<PostListDto> postsToPostListDtos(List<Post> posts) {
        return posts
                .stream()
                .map(post -> PostListDto
                        .builder()
                        .postId(post.getPostId())
                        .nickname(post.getMember().getNickname())
                        .image(post.getMember().getImage())
                        .location(post.getLocation())
                        .event(post.getEvent())
                        .joinCount(post.getJoinMembers().size())
                        .playerNum(post.getPlayerNum())
                        .date(post.getDate())
                        .time(post.getTime())
                        .lat(post.getLat())
                        .lng(post.getLng())
                        .build())
                .collect(Collectors.toList());
    }
}
