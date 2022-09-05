import React from 'react';

import Link from 'next/link';
import {
  Box,
  Heading,
  Text,
  Divider,
  Container,
  Flex,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { Meta } from '@layout/Meta';
import { Main } from '@templates/Main';
import { GithubIcon } from '@components/icon/github';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Zk Block | Boilerplate for ZK Dapps"
          description="Boilerplate for ZK Dapps | Zero Knowledge Proofs"
        />
      }
    >
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Container maxW="container.lg" pb="90px">
          <Box py={['23px', '23px', '35px']} color="gray.200">
            <Heading
              color="black"
              fontSize={['22px', '22px', '28px']}
              mb={['8px', '8px', '16px']}
            >
              zk - Registry
            </Heading>

            <Text fontSize={['14px', '14px', '16px']} color="black" mb="16px">
              <Text fontWeight={500} as="span" color="gray">
                zk-registry
              </Text>{' '}
              {/* <b>Boilerplate</b> for building <b>ZK Dapps</b> on <b>Web3</b>. */}
            </Text>
            <Flex flexDirection="row" alignContent="ce">
              <Link aria-label="Go to GitHub page" href={''} passHref>
                <Icon
                  as={GithubIcon}
                  display="block"
                  transition="color 0.2s"
                  cursor="pointer"
                  color="black"
                  w="10"
                  h="10"
                  _hover={{ color: 'gray.600' }}
                />
              </Link>
            </Flex>
          </Box>
          <Divider />
        </Container>

        <Box>
          <Container maxW="container.lg">
            <Flex
              flexDirection={['column', 'row']}
              justifyContent="space-between"
              mb="16px"
            >
              <Stack spacing="24px">
                <Text fontWeight={500} as="span" color="gray">
                  Registry Status
                </Text>

                <Divider />
              </Stack>
            </Flex>
          </Container>
        </Box>
      </Box>
    </Main>
  );
};

export default Index;
