import { StyledDashboard, Wrapper, Title, Text, Product, ImageContainer } from "./Dashboard.styled";
import { Button } from "../Shared/Button.styled"
import {illustrationDevices} from "../../assets";

const Dashboard = () => (

	<StyledDashboard>
		<ImageContainer>
			<img src={illustrationDevices} alt="devices"/>
		</ImageContainer>

		<Wrapper>
			<Product>
				Monograph Dashboard
			</Product>
		  
		  <Title>
		  	Powerful insights into your team
		  </Title>

		  <Text>
		  	Project planning and time tracking for agile teams
		  </Text>
		  
		  <Button>
		  	Schedule a demo
		  </Button>	
		</Wrapper>  
		  	  
	</StyledDashboard>
);

export default Dashboard;