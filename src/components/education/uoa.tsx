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

const Uoa = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <Container className="font-primary-normal">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ stiffness: 0, duration: 0.4, delay: 0.1 * 3 }}
    >
      <Logo
        $height={55}
        src={iconPicker(Icon.UNSW, isDarkMode)}
        alt="University of New South Wales"
      />
      <UniversityText $isDarkMode={isDarkMode}>
        University of New South Wales
      </UniversityText>
      <h3 className="mt-1 md:mb-9 text-lg xxxl:text-xl">
        Master of Information Technology
      </h3>
      <SummaryText>
        Sep 2023 – Jan 2025
      </SummaryText>
      <SummaryText>
        • Master of Information Technology graduate with focus on full-stack development, data systems, and agile methodologies.
      </SummaryText>
      <SummaryText>
        • Developed skills in Python, JavaScript, React, Django, Flask, and cloud technologies.
      </SummaryText>
      <SummaryText>
        • Led projects involving backend systems, data pipelines, and team collaboration in agile environments.
      </SummaryText>
    </motion.div>
  </Container>
);

export default Uoa;

const Container = styled.div`
  margin-top: 30px;
  padding-bottom: 10px;
  padding-left: ${BLOCK_PADDING + "px"};
  padding-right: ${BLOCK_PADDING + "px"};

  @media ${layout.up.md} {
    flex: 0.5;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: ${BLOCK_PADDING_DESKTOP + "px"};
    padding-right: ${BLOCK_PADDING_DESKTOP + "px"};
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

const SecondaryTitle = styled.h3<{ $isDarkMode: boolean }>`
  font-size: 18px;
  line-height: 28px;
  color: ${({ $isDarkMode }) => ($isDarkMode ? Color.BLUE : Color.RED)};

  @media ${layout.up.xxxl} {
    font-size: 20px;
    line-height: 28px;
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

const Highlight = styled.span<{ $isDarkMode: boolean }>`
  color: ${({ $isDarkMode }) => ($isDarkMode ? Color.BLUE : Color.RED)};
`;
