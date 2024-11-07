import { ConnectButton, useConnectWallet, useWallets } from "@mysten/dapp-kit";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import { WalletStatus } from "./WalletStatus";
import NetworkSelector from "./NetworkSelector";

function App() {
  return (
    <>
      <Flex
        position="sticky"
        px="4"
        py="2"
        justify="between"
        style={{
          borderBottom: "1px solid var(--gray-a2)",
        }}
      >
        <Box>
          <Heading>dApp Starter Template</Heading>
        </Box>

        <Box>
          <ConnectButton />
        </Box>

        <Box>
            <MyComponent />
        </Box>
        <Box>
          <NetworkSelector/>
        </Box>

      </Flex>
      <Container>
        <Container
          mt="5"
          pt="2"
          px="4"
          style={{ background: "var(--gray-a2)", minHeight: 500 }}
        >
          <WalletStatus />
        </Container>
      </Container>
    </>
  );
}



function MyComponent() {
	const wallets = useWallets();
	const { mutate: connect } = useConnectWallet();
 
	return (
		<div style={{ padding: 20 }}>
			<ul>
				{wallets.map((wallet) => (
					<li key={wallet.name}>
						<button
							onClick={() => {
								connect(
									{ wallet },
									{
										onSuccess: () => console.log('connected'),
									},
								);
							}}
						>
							Connect to {wallet.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
