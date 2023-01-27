package com.codestates.seb41_main_031.amoona.joinMember.mapper;

import com.codestates.seb41_main_031.amoona.joinMember.dto.JoinMemberPostDto;
import com.codestates.seb41_main_031.amoona.joinMember.dto.JoinMemberResponseDto;
import com.codestates.seb41_main_031.amoona.joinMember.entity.JoinMember;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface JoinMemberMapper {

    JoinMember joinMemberPostDtoToJoinMember(JoinMemberPostDto joinMemberPostDto);

    default JoinMemberResponseDto joinMemberToJoinMemberResponseDto(JoinMember joinMember) {

        return new JoinMemberResponseDto(joinMember.getJoinMemberId(), joinMember.getMember().getNickname(),
                joinMember.getMember().getImage(), joinMember.getCreatedAt(), joinMember.getModifiedAt());
    }
}
