import styled from "styled-components";

export const SelectBox = styled.div`
    border: 3px solid rgb(221, 221, 221);
    height: 200px;
    overflow: hidden;
    position: relative;
    margin-top: 50px;
    
`
export const SelectButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 28px;
    border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 300px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    margin-bottom: 10px;
    position:relative;

    
`
export const SelectButtonBox = styled.div`
display: flex;
align-items: start;
justify-content: start;
gap: 20px;

`
export const SelectList = styled.div`
display: flex;
align-items: start;
justify-content: start;
flex-direction: column;
text-align: start;
background-color: rgb(255, 255, 255);
border: 1px solid rgb(244, 244, 244);
overflow: hidden;
border-radius: 15px;
`

export const ListButton = styled.div`
width : 100%;
padding:10px 20px;
&:hover{
    background-color: rgb(200, 200, 200);;
}
`