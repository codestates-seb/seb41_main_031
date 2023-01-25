package com.codestates.seb41_main_031.amoona.member.mapper;

import com.codestates.seb41_main_031.amoona.member.dto.MemberDto;
import com.codestates.seb41_main_031.amoona.member.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostToMemberDto(MemberDto.Post postRequest);
    Member memberPatchToMemberDto(MemberDto.Patch patchRequest);
    MemberDto.Response memberToMemberResponseDto(Member member);
    List<MemberDto.Response> memberListToMemberResponseListDto(List<Member> memberList);

}
