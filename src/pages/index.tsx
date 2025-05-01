import { useState } from 'react';
import Head from 'next/head';
import { 
  Container, 
  Title, 
  Text, 
  Button, 
  Group, 
  Stack, 
  Image, 
  Box, 
  CopyButton, 
  Tooltip, 
  rem, 
  ActionIcon,
  Center
} from '@mantine/core';
import { IconCheck, IconCopy, IconBrandGithub, IconBook } from '@tabler/icons-react';

// Create styles object for inline styling
const styles = {
  wrapper: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, var(--mantine-color-primary-0) 0%, var(--mantine-color-white) 100%)',
    padding: rem(20),
  },

  container: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
    maxWidth: rem(800),
  },

  title: {
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: rem(-1),
    color: 'var(--mantine-color-secondary-4)',
    marginBottom: 'var(--mantine-spacing-xs)',
    textAlign: 'center',
  },

  titleSmall: {
    fontSize: rem(28),
  },

  subtitle: {
    fontWeight: 500,
    color: 'var(--mantine-color-secondary-6)',
    textAlign: 'center',
    fontSize: rem(18),
    marginBottom: rem(40),
    fontStyle: 'italic',
  },

  subtitleSmall: {
    fontSize: rem(16),
  },

  installCommand: {
    backgroundColor: 'var(--mantine-color-secondary-9)',
    color: 'var(--mantine-color-white)',
    padding: `${rem(12)} ${rem(20)}`,
    borderRadius: 'var(--mantine-radius-md)',
    fontFamily: 'monospace',
    fontSize: rem(16),
    position: 'relative',
    width: '100%',
    maxWidth: rem(400),
    margin: '0 auto',
  },

  installCommandSmall: {
    fontSize: rem(14),
    padding: `${rem(10)} ${rem(16)}`,
  },

  copyButton: {
    position: 'absolute',
    top: rem(8),
    right: rem(8),
    color: 'var(--mantine-color-white)',
  },

  copyButtonHover: {
    backgroundColor: 'var(--mantine-color-secondary-8)',
  },

  button: {
    backgroundColor: 'var(--mantine-color-primary-4)',
    color: 'var(--mantine-color-white)',
    fontWeight: 600,
  },

  buttonHover: {
    backgroundColor: 'var(--mantine-color-primary-5)',
  },

  buttonSecondary: {
    backgroundColor: 'var(--mantine-color-secondary-4)',
    color: 'var(--mantine-color-white)',
    fontWeight: 600,
  },

  buttonSecondaryHover: {
    backgroundColor: 'var(--mantine-color-secondary-5)',
  },
};

export default function Home() {

  return (
    <>
      <Head>
        <title>LazySlide - Accessible and interoperable whole slide image analysis</title>
        <meta name="description" content="LazySlide is a Python framework for whole slide image (WSI) analysis, designed to integrate seamlessly with the scverse ecosystem." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box style={styles.wrapper}>
        <Container style={styles.container}>
          <Center mb={40}>
            <Image
              src="https://raw.githubusercontent.com/rendeirolab/lazyslide/main/assets/logo@3x.png"
              alt="LazySlide Logo"
              width={150}
              height={150}
            />
          </Center>

          <Title style={styles.title}>LazySlide</Title>
          <Text style={styles.subtitle}>
            Accessible and interoperable whole slide image analysis
          </Text>

          <Stack spacing="xl" align="center" mb={40}>
            <Box style={styles.installCommand}>
              pip install lazyslide
              <CopyButton value="pip install lazyslide" timeout={2000}>
                {({ copied, copy }) => (
                  <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                    <ActionIcon 
                      style={styles.copyButton} 
                      onClick={copy}
                      variant="subtle"
                    >
                      {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                    </ActionIcon>
                  </Tooltip>
                )}
              </CopyButton>
            </Box>
          </Stack>

          <Center>
            <Group spacing="md">
              <Button 
                style={styles.button}
                leftIcon={<IconBrandGithub size={20} />}
                component="a"
                href="https://github.com/rendeirolab/lazyslide"
                target="_blank"
                size="lg"
              >
                GitHub
              </Button>

              <Button 
                style={styles.buttonSecondary}
                leftIcon={<IconBook size={20} />}
                component="a"
                href="https://lazyslide.readthedocs.io"
                target="_blank"
                size="lg"
              >
                Documentation
              </Button>
            </Group>
          </Center>

          <Box mt={60}>
            <Text align="center" size="lg" mb={20}>
              A Python framework for whole slide image (WSI) analysis, designed to integrate seamlessly with the scverse ecosystem.
            </Text>

            <Text align="center" size="md">
              By adopting standardized data structures and APIs familiar to the single-cell and genomics community, 
              LazySlide enables intuitive, interoperable, and reproducible workflows for histological analysis.
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
}
