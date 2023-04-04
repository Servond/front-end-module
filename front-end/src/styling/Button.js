import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
    baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderRadius: 'base'
    },
    sizes: {
        sm: {
            fontSize: 'sm',
            px: 20,
            py: 30,
            textTransform: 'lowercase',
            backgroundColor: 'red'
        },
        md: {
            fontSize: 'md',
            px: 60,
            py: 40,
            backgroundColor: 'blue'
        }
    },
    variants: {
        outline: {
            border: '2px solid',
            borderColor: 'black',
            // color: 'black'
        },
        solid: {
            // bg: 'black',
            // color: 'white'
        }
    },
    defaultProps: {
        size: 'md',
        variant: 'outline'
    }
});

export default Button;

