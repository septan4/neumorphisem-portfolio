import {
  Container,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Box,
  useColorModeValue,
  Heading,
  IconButton,
  Link
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import P from '../components/paragraph'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaVimeoV,
  FaBehance
} from 'react-icons/fa'
import Layout from './layouts/article'
import Section from './section'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const formShadowDark =
    '  -3px -3px 3px 0 rgba(255, 255, 255, 0.04), 5px 5px 5px 0 rgba(0, 0, 0, 2)'
  const formShadowLight =
    '4px 4px 6px 0 rgba(0,0,0,.1), -4px -4px 6px rgba(255,255,255,1)'

  const formShadowInputLight =
    '2px 2px 3px rgba(55, 84, 170, .15),inset 0px 0px 4px rgba(255, 255, 255, 0),inset 7px 7px 15px rgba(55, 84, 170, .15),inset -7px -7px 20px rgba(255, 255, 255, 1),0px 0px 4px rgba(255, 255, 255, .2) '
  const formShadowInputDark =
    'inset 3px 3px 5px rgba(0,0,0,.7), inset -3px -3px 5px rgba(225,225,225,.1)'

  const formBoxShadow = useColorModeValue(formShadowLight, formShadowDark)
  const formShadowInput = useColorModeValue(
    formShadowInputLight,
    formShadowInputDark
  )

  const form = useRef()
  const [statusMessage, setStatusMessage] = useState('')
  const { register, handleSubmit, reset } = useForm()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_x6gm4kr',
        'template_jy47etc',
        form.current,
        'm8ZdxvWUyFrvemFhA'
      )
      .then(
        result => {
          console.log(result.text)
          setStatusMessage('Message sent successfully!')
          setTimeout(() => setStatusMessage(''), 5000)
        },
        error => {
          console.error('Failed to send the message', error.text)
          setStatusMessage('Failed to send the message. Please try again.')
          setTimeout(() => setStatusMessage(''), 5000)
        }
      )
  }

  return (
    <Layout title="Contact">
      <Container maxW="container.lg" id="contact" mt={20}>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" id="about">
            Contact
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <p>
                I&#39;m excited to connect with you. Whether you&#39;d like to
                discuss collaborations, provide feedback, or just say hello,
                don&#39;t hesitate to reach out!
              </p>
              <Box
                display="flex"
                flexDirection="column"
                alignItems={{ base: 'center', md: 'flex-start' }}
                spacing={5}
                mt="20px"
              >
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-around"
                  alignItems="center"
                  height="80px"
                  width="350px"
                  boxShadow={formBoxShadow}
                  borderRadius="10px"
                  padding="10px"
                >
                  <Link
                    href="https://www.facebook.com/sourena.lalehzari/"
                    isExternal
                  >
                    <IconButton
                      color="#3b5998"
                      colorScheme="none"
                      aria-label="Facebook"
                      icon={<FaFacebookF />}
                      boxShadow={formBoxShadow}
                      borderRadius="sm"
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/sourenalalehzari_social/?hl=en"
                    isExternal
                  >
                    <IconButton
                      color="#d54180"
                      colorScheme="none"
                      aria-label="Instagram"
                      icon={<FaInstagram />}
                      boxShadow={formBoxShadow}
                      borderRadius="sm"
                    />
                  </Link>
                  <Link href="https://twitter.com/Sourenalz" isExternal>
                    <IconButton
                      color="#00acee"
                      colorScheme="none"
                      aria-label="Twitter"
                      icon={<FaTwitter />}
                      boxShadow={formBoxShadow}
                      borderRadius="sm"
                    />
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/sourenalalehzari"
                    isExternal
                  >
                    <IconButton
                      color="#0e76a8"
                      colorScheme="none"
                      aria-label="LinkedIn"
                      icon={<FaLinkedinIn />}
                      boxShadow={formBoxShadow}
                      borderRadius="sm"
                    />
                  </Link>
                  <Link href="https://vimeo.com/user187403232" isExternal>
                    <IconButton
                      color="#08b0f0"
                      colorScheme="none"
                      aria-label="Vimeo"
                      icon={<FaVimeoV />}
                      boxShadow={formBoxShadow}
                      borderRadius="sm"
                    />
                  </Link>

                  <Link
                    href="https://www.behance.net/sourenalalehza"
                    isExternal
                  >
                    <IconButton
                      color="#0054f7"
                      colorScheme="none"
                      aria-label="Behance"
                      icon={<FaBehance />}
                      boxShadow={formBoxShadow}
                      borderRadius="sm"
                    />
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ base: 'center', md: 'flex-end' }}
            >
              <Box
                boxShadow={formBoxShadow}
                borderRadius="lg"
                p={5}
                w={'300px'}
                h={'100%'}
              >
                <form ref={form} onSubmit={sendEmail}>
                  <SimpleGrid columns={[1, 1, 1]} gap={6} mt={4}>
                    <FormControl isRequired>
                      <FormLabel
                        requiredIndicator={
                          <span style={{ color: '#8121b5' }}> * </span>
                        }
                      >
                        Your Name
                      </FormLabel>
                      <Input
                        {...register('name')}
                        name="name"
                        borderRadius="2xl"
                        border={useColorModeValue('3px solid #f3f4f7', 'none')}
                        boxShadow={formShadowInput}
                        _focus={{
                          outline: 'none',
                          border: useColorModeValue(
                            '3px solid #f3f4f7',
                            'none'
                          ),
                          boxShadow: formShadowInput
                        }}
                        _hover="none"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel
                        requiredIndicator={
                          <span style={{ color: '#8121b5' }}> * </span>
                        }
                      >
                        Email
                      </FormLabel>
                      <Input
                        {...register('email')}
                        type="email"
                        name="email"
                        border={useColorModeValue('3px solid #f3f4f7', 'none')}
                        borderRadius="2xl"
                        boxShadow={formShadowInput}
                        _focus={{
                          outline: 'none',
                          border: useColorModeValue(
                            '3px solid #f3f4f7',
                            'none'
                          ),
                          boxShadow: formShadowInput
                        }}
                        _hover="none"
                      />
                    </FormControl>
                  </SimpleGrid>
                  <SimpleGrid columns={[1, 1, 1]} mt={4}>
                    <FormControl isRequired>
                      <FormLabel
                        requiredIndicator={
                          <span style={{ color: '#8121b5' }}> * </span>
                        }
                      >
                        Message
                      </FormLabel>
                      <Textarea
                        {...register('message')}
                        name="message"
                        borderRadius="2xl"
                        border={useColorModeValue('3px solid #f3f4f7', 'none')}
                        boxShadow={formShadowInput}
                        _focus={{
                          outline: 'none',
                          border: useColorModeValue(
                            '3px solid #f3f4f7',
                            'none'
                          ),
                          boxShadow: formShadowInput
                        }}
                        _hover="none"
                      />
                    </FormControl>
                    <Box my={5} align="center">
                      <Button
                        w="100%"
                        color={useColorModeValue(' #8121b5', 'none')}
                        type="submit"
                        leftIcon={<EmailIcon />}
                        colorScheme="none"
                        boxShadow={formBoxShadow}
                      >
                        Send
                      </Button>
                    </Box>
                    <P
                      color={
                        statusMessage.startsWith('Failed')
                          ? 'red.500'
                          : 'green.500'
                      }
                    >
                      {statusMessage}
                    </P>
                  </SimpleGrid>
                </form>
              </Box>
            </Box>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Contact
