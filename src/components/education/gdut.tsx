import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Icon from "../../enums/icons";
import Color from "../../enums/color";
import layout from "../../styles/layout";
import iconPicker from "../../helper/iconPicker";
import {
  BLOCK_PADDING,
  BLOCK_PADDING_DESKTOP,
  IMAGE_DEFAULT_HEIGHT,
} from "../../constants/margin";

const Gdut = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <Container className="font-primary-normal" $isDarkMode={isDarkMode}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ stiffness: 0, duration: 0.4, delay: 0.1 * 1 }}
    >
      <Logo
        $height={80}
        src={iconPicker(Icon.Gdut, isDarkMode)}
        alt="Guangdong University of Technology"
      />
      <UniversityText $isDarkMode={isDarkMode}>
        Guangdong University of Technology
      </UniversityText>
      <h3 className="mt-1 md:mb-9 text-lg xxxl:text-xl">
        Bachelor of Engineering (Computer Science and Technology)
      </h3>
      <SummaryText>
        Sep 2019 - Jun 2023
      </SummaryText>
      <SummaryText>
        • Bachelor of Engineering graduate with comprehensive knowledge in computer science and technology.
      </SummaryText>
      <SummaryText>
        • Developed expertise in software engineering principles and practices.
      </SummaryText>
      <SummaryText>
        • Gained experience in various aspects of computer science education.
      </SummaryText>
    </motion.div>
  </Container>
);

export default Gdut;

const Container = styled.div<{ $isDarkMode: boolean }>`
  margin-top: 20px;
  padding-bottom: 10px;
  padding-left: ${BLOCK_PADDING + "px"};
  padding-right: ${BLOCK_PADDING + "px"};
  border-right: none;

  @media ${layout.up.md} {
    flex: 0.5;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: ${BLOCK_PADDING_DESKTOP + "px"};
    padding-right: ${BLOCK_PADDING_DESKTOP + "px"};
    border-right: ${({ $isDarkMode }) =>
      $isDarkMode
        ? `0.5px solid ${Color.BACKGROUND_WHITE_SECONDARY}`
        : `0.5px solid ${Color.BACKGROUND_BLACK}`};
  }
`;

const Logo = styled.img<{ $height: number }>`
  width: auto;
  height: ${({ $height }) => $height + "px"};
  margin-top: ${({ $height }) =>
    15 - ($height - IMAGE_DEFAULT_HEIGHT) / 2 + "px"};
  margin-bottom: ${({ $height }) =>
    15 - ($height - IMAGE_DEFAULT_HEIGHT) / 2 + "px"};
  user-select: none;

  @media ${layout.up.md} {
    margin-top: ${({ $height }) =>
      10 - ($height - IMAGE_DEFAULT_HEIGHT) / 2 + "px"};
    margin-bottom: ${({ $height }) =>
      30 - ($height - IMAGE_DEFAULT_HEIGHT) / 2 + "px"};
  }
`;

const UniversityText = styled.h2<{ $isDarkMode: boolean }>`
  font-size: 22px;
  color: ${({ $isDarkMode }) => ($isDarkMode ? Color.BLUE : Color.RED)};

  @media ${layout.up.xxxl} {
    font-size: 24px;
  }
`;

const SummaryText = styled.p`
  margin-top: 15px;
  font-size: 18px;
  line-height: 25px;

  @media ${layout.up.md} {
    width: 90%;
  }

  @media ${layout.up.xxxl} {
    font-size: 20px;
    line-height: 30px;
  }
`;