'use client'

interface iProps {
    key: string
}
export const Input = () => {
    const handleButtonPress = ({key}: iProps) => {
        console.log(key)
    }

    return (
        <input type="text" onKeyUp={handleButtonPress} autoFocus/>
    )
}