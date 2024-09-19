import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/product'

const CreatePage = () => {

    const [newProduct, setNewProduct] = useState({
        name:'',
        price:'',
        image:'',
    })

	const toast = useToast()
    const { createProduct } = useProductStore();
    const handleAddProduct =async () => {
        const {success , msg} = await createProduct(newProduct);

		if(!success){
			toast({
				title: 'Error',
                status: 'error',
                duration: 5000,
                isClosable: true,
				description:msg,
			})
		}else{
			toast({
				title: 'Success',
                status: 'success',
                duration: 5000,
                isClosable: true,
				description:msg,
			})

			setNewProduct({
                name:'',
                price:'',
                image:'',
            })
		}
        
    }

  return (
    <Container maxW={'container.sm'} mt={20}>
        <VStack spacing={8} >
<Heading as={'h1'} fontSize={{base:'2xl',sm:'4xl'}} textAlign={'center'} mb={8}>Create New Product</Heading>
<Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
					<VStack spacing={4}>
						<Input
							placeholder='Product Name'
							name='name'
							value={newProduct.name}
							onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
						/>
						<Input
							placeholder='Price'
							name='price'
							type='number'
							value={newProduct.price}
							onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
						/>
						<Input
							placeholder='Image URL'
							name='image'
							value={newProduct.image}
							onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
						/>

						<Button colorScheme='blue' onClick={handleAddProduct} w='full'>
							Add Product
						</Button>
					</VStack>
				</Box>
        </VStack>
    </Container>
  )
}

export default CreatePage