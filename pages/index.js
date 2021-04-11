import Head from "next/head";
import { Box, Flex } from "reflexbox/styled-components";
import Image from "next/image";
import styled from "styled-components";

/* const Img = styled(Image)`
  position: relative;
  @media screen and (max-width: 375px) {
    position: relative;
    left: 60px;
    right: 200px;
  }
  @media screen and (max-width: 768px) {
    left: 460px;
    position: relative;
    right: 200px;
  }
`; */

const Section = styled.section``;

export default function Home() {
  return (
    <Box
      width={[9 / 10, 9 / 10, 4 / 5]}
      maxWidth="1110px"
      mx="auto"
      mt={["23px", "40px", "55px"]}
    >
      <Head>
        <title>Typemaster - Home</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <header>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignContent="center"
        >
          <Image
            src="/logo.svg"
            alt="Picture of the author"
            width={40}
            height={40}
          />
          <a className="btn-secondary">Pre-order now</a>
        </Flex>
      </header>

      <main>
        <Section className="test">
          <Flex
            flexDirection={["column", "row"]}
            justifyContent="space-between"
            alignItems="center"
            mt={["34px", "83px"]}
          >
            <Box width={[1, "339px", "445px"]} mb="64px">
              <h1>Typemaster keyboard</h1>
              <p>
                Improve your productivity and gaming without breaking the bank.
                Upgrade to a high quality mechanical typing experience.
              </p>
              <Flex flexDirection="row" alignItems="center">
                <a className="btn-primary" href="#">
                  Pre-order now
                </a>
                <span style={{ marginLeft: "40px" }}>RELEASE ON 5/27</span>
              </Flex>
            </Box>
            <Box width={[1, 0, "480px"]} height={["331px"]}>
              <Box display={["none", "none", "block"]}>
                <Image
                  src="/keyboard-1.png"
                  alt="Clavier principale"
                  width={540}
                  height={480}
                />
              </Box>
            </Box>
          </Flex>
        </Section>
        <section>
          <Flex
            flexDirection={["column", "column", "row"]}
            alignItems="center"
            mt={["60px", "60px", "100px"]}
          >
            <Flex flexDirection="row" justifyContent="space-between">
              <Box mr={["100px", "30px"]} width={("159px", "auto", "auto")}>
                <Box display={["none", "block", "block"]}>
                  <Image
                    src="/keyboard-2.png"
                    alt="Clavier 2"
                    width={255}
                    height={480}
                  />
                </Box>
              </Box>
              <Box width={["220px", "445px", "445px"]}>
                <Image
                  src="/keyboard-3.png"
                  alt="Clavier 3"
                  width={445}
                  height={480}
                />
              </Box>
            </Flex>
            <Flex
              flexDirection={["column", "row", "column"]}
              alignItems={["center"]}
              ml={["0%", "0%", "auto"]}
              mt={["50px", "38px", ""]}
              width={["auto", "auto", "255px"]}
              textAlign={["center", "inherit", "inherit"]}
            >
              <h2>mechanical wireless Keyboard</h2>
              <span>
                The Typemaster keyboard boasts top-notch build and practical
                design. It offers a wide variety of switches and keycaps, along
                with reliable wireless connectivity.
              </span>
            </Flex>
          </Flex>
        </section>
        <section>
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
            mt={["47px", "41px", "96px"]}
          >
            <Box
              width={[1, 1 / 2, 1 / 4]}
              mt={["64px", "72px"]}
              textAlign={["center", "inherit", "inherit"]}
            >
              <Box maxWidth={["327px", "281px", "255px"]}>
                <Image
                  src="/icons/screen.svg"
                  alt=" icon"
                  width={65}
                  height={65}
                />
                <h3>HIGHLY COMPATIBLE</h3>
                <span>
                  Easy to use and works well with all major computer brands,
                  gaming consoles and mobile devices. Plug & play, no
                  installation or driver needed.
                </span>
              </Box>
            </Box>
            <Box
              width={[1, 1 / 2, 1 / 4]}
              mt={["64px", "72px"]}
              textAlign={["center", "inherit", "inherit"]}
            >
              <Box maxWidth={["327px", "281px", "255px"]}>
                <Image
                  src="/icons/bluetooth.svg"
                  alt=" icon"
                  width={65}
                  height={65}
                />
                <h3>WIRELESS WITH BLUETOOTH</h3>
                <span>
                  Powerful 2.4G RF technology allows you to connect the cordless
                  keyboard from up to 30ft away. Simply plug the unifying
                  receiver into your computer.
                </span>
              </Box>
            </Box>
            <Box
              width={[1, 1 / 2, 1 / 4]}
              mt={["64px", "72px"]}
              textAlign={["center", "inherit", "inherit"]}
            >
              <Box maxWidth={["327px", "281px", "255px"]}>
                <Image
                  src="/icons/battery.svg"
                  alt=" icon"
                  width={65}
                  height={65}
                />
                <h3>HIGH CAPACITY BATTERY</h3>
                <span>
                  Equipped with a long-lasting built-in battery, you’ll never
                  have to spend a dime on replaceable ones. Enjoy 40 hours of
                  usage time between charges.
                </span>
              </Box>
            </Box>
            <Box
              width={[1, 1 / 2, 1 / 4]}
              mt={["64px", "72px"]}
              textAlign={["center", "inherit", "inherit"]}
            >
              <Box maxWidth={["327px", "281px", "255px"]}>
                <Image
                  src="/icons/light.svg"
                  alt=" icon"
                  width={65}
                  height={65}
                />
                <h3>RGB BACKLIT MODES</h3>
                <span>
                  Choose from 4 backlight brightness levels and adjustable
                  breathing speed. Each key glows intensely in the dark and
                  helps you type in low light conditions.
                </span>
              </Box>
            </Box>
          </Flex>
        </section>
      </main>

      <footer>
        <Box textAlign="center" mt="128px" mb="39px">
          <span style={{ fontWeight: "bold" }}>Typemaster 2021 </span>| All
          Rights Reserved
        </Box>
      </footer>
    </Box>
  );
}
