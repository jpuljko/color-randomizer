import { Button, Container, Grid, Title, Space } from "@mantine/core";

export default function RandomizeColor() {

    const handleClick = (e) => {
        let body = document.querySelector("body");
        body.style.background = getRandomColor();
        e.target.style.backgroundColor = getRandomColor();
    }

    function getRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <Container>
            <Title order={1} align="center">Randomize Color</Title>
            <Space h="md" />
            <Grid>
                <Grid.Col span={2}>
                    <Button color="red" onClick={handleClick}>
                        Click me
                    </Button>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Button color="orange" onClick={handleClick}>
                        Click me
                    </Button>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Button color="yellow" onClick={handleClick}>
                        Click me
                    </Button>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Button color="green" onClick={handleClick}>
                        Click me
                    </Button>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Button color="blue" onClick={handleClick}>
                        Click me
                    </Button>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Button color="violet" onClick={handleClick}>
                        Click me
                    </Button>
                </Grid.Col>
            </Grid>
        </Container>
        
    ); 
}