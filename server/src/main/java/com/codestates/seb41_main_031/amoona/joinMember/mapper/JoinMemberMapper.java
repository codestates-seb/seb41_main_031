package com.codestates.seb41_main_031.amoona.joinMember.mapper;

import com.codestates.seb41_main_031.amoona.joinMember.dto.JoinMemberPostDto;
import com.codestates.seb41_main_031.amoona.joinMember.dto.JoinMemberResponseDto;
import com.codestates.seb41_main_031.amoona.joinMember.entity.JoinMember;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface JoinMemberMapper {

    JoinMember joinMemberPostDtoToJoin(JoinMemberPostDto joinMemberPostDto);

    default JoinMemberResponseDto joinMemberToJoinMemberResponseDto(JoinMember savedJoinMember) {

        return new JoinMemberResponseDto(savedJoinMember.getJoinMemberId(), savedJoinMember.getMember().getImage(),
                savedJoinMember.getMember().getNickname(), savedJoinMember.getCreatedAt(), savedJoinMember.getModifiedAt());
    }
}
