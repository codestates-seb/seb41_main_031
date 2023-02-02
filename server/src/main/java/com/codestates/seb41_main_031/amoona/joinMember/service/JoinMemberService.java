package com.codestates.seb41_main_031.amoona.joinMember.service;

import com.codestates.seb41_main_031.amoona.exception.BusinessLogicException;
import com.codestates.seb41_main_031.amoona.exception.ExceptionCode;
import com.codestates.seb41_main_031.amoona.joinMember.entity.JoinMember;
import com.codestates.seb41_main_031.amoona.joinMember.repository.JoinMemberRepository;
import com.codestates.seb41_main_031.amoona.member.entity.Member;
import com.codestates.seb41_main_031.amoona.member.repository.MemberRepository;
import com.codestates.seb41_main_031.amoona.post.entity.Post;
import com.codestates.seb41_main_031.amoona.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class JoinMemberService {

    private final JoinMemberRepository joinMemberRepository;
    private final MemberRepository memberRepository;
    private final PostRepository postRepository;

    public JoinMember createJoinMember(Long postId, String email) {
        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        Post post = postRepository.findById(postId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));

        JoinMember joinMember = JoinMember.builder().member(member).post(post).build();

        for (int i = 0; i < post.getJoinMembers().size(); i++){

            if (post.getJoinMembers().get(i).getMember().getMemberId().equals(member.getMemberId())) {
                throw new BusinessLogicException(ExceptionCode.JOIN_MEMBER_EXISTS);
            }
        }

        return joinMemberRepository.save(joinMember);
    }

    public void deleteJoinMember(Long postId, String email) {
        JoinMember findJoinMember = joinMemberRepository.findById(postId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.JOIN_MEMBER_NOT_FOUND));
        if (!findJoinMember.getMember().getEmail().equals(email)) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_ALLOWED);
        }

        joinMemberRepository.delete(findJoinMember);
    }
}
