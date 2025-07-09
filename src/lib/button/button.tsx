import React, { FC } from "react";
import styled from "styled-components";

interface IButtonProps {
    appearance?: "primaryBase" | "primaryDerivate" | "secondary" | "ghost";
    size?: "xl" | "xs";
    disabled?: boolean;
    loading?: boolean;
    iconBefore?: string;
    iconAfter?: string;
    text?: string;
}

const StyledButton = styled.button<IButtonProps>`
    border: 1px solid black;
    display: inline-flex;
    flex-direction: row;
    gap: ${(props) => props.theme.spacing.inner.close};
    justify-content: center;
    align items: center;
    padding: unset;
    transition: ${(props) => props.theme.animation.base};
    &:focus {
        box-shadow: ${(props) => props.theme.focus};

    ${(props) => props.appearance === "primaryBase" && `
        &:enabled {
        background-color: ${props.theme.colors.bg.interact.green.enabled};
        color: ${props.theme.colors.textIcon.inverted};
        }
        &:hover {
        background-color: ${props.theme.colors.bg.interact.green.hover};
        }
        &:active {
        background-color: ${props.theme.colors.bg.interact.green.active};
        }
        &:focus {
        background-color: ${props.theme.colors.bg.interact.green.focus};
        }
        &:disabled {
        background-color: ${props.theme.colors.bg.interact.green.disabled};
        }
    `}

    ${(props) => props.appearance === "primaryDerivate" && `
        &:enabled {
        background-color: ${props.theme.colors.bg.interact.gray.enabled};
        color: ${props.theme.colors.textIcon.inverted};
        }
        &:hover {
        background-color: ${props.theme.colors.bg.interact.gray.hover};
        }
        &:active {
        background-color: ${props.theme.colors.bg.interact.gray.active};
        }
        &:focus {
        background-color: ${props.theme.colors.bg.interact.gray.focus};
        }
        &:disabled {
        background-color: ${props.theme.colors.bg.interact.gray.disabled};
        }
    `}

    ${(props) => props.appearance === "secondary" && `
        &:enabled {
        background-color: ${props.theme.colors.bg.interact.lighWeight.enabled};
        color: ${props.theme.colors.textIcon.interact.enabled};
        border-color: ${props.theme.colors.border.interact.enabled};
        }
        &:hover {
        background-color: ${props.theme.colors.bg.interact.lighWeight.hover};
        color: ${props.theme.colors.textIcon.interact.hover};
        border-color: ${props.theme.colors.border.interact.hover};
        }
        &:active {
        background-color: ${props.theme.colors.bg.interact.lighWeight.active};
        color: ${props.theme.colors.textIcon.interact.active};
        border-color: ${props.theme.colors.border.interact.active};
        }
        &:focus {
        background-color: ${props.theme.colors.bg.interact.lighWeight.focus};
        color: ${props.theme.colors.textIcon.interact.focus};
        border-color: ${props.theme.colors.border.interact.focus};
        }
        &:disabled {
        background-color: ${props.theme.colors.bg.interact.lighWeight.disabled};
        color: ${props.theme.colors.textIcon.interact.disabled};
        border-color: ${props.theme.colors.border.interact.disabled};
        }
    `}

    ${(props) => props.appearance === "ghost" && `
        &:enabled {
        background-color: ${props.theme.colors.bg.interact.lighWeight.enabled};
        color: ${props.theme.colors.textIcon.interact.enabled};
        }
        &:hover {
        background-color: ${props.theme.colors.bg.interact.lighWeight.hover};
        color: ${props.theme.colors.textIcon.interact.hover};
        }
        &:active {
        background-color: ${props.theme.colors.bg.interact.lighWeight.active};
        color: ${props.theme.colors.textIcon.interact.active};
        }
        &:focus {
        background-color: ${props.theme.colors.bg.interact.lighWeight.focus};
        color: ${props.theme.colors.textIcon.interact.focus};
        }
        &:disabled {
        background-color: ${props.theme.colors.bg.interact.lighWeight.disabled};
        color: ${props.theme.colors.textIcon.interact.disabled};
        }
    `}

`;

export const Button: React.FC<IButtonProps> = ({
    appearance, 
    size, 
    disabled, 
    loading, 
    iconBefore, 
    iconAfter, 
    text = "buttonText"
}) => {
    return <StyledButton 
        appearance={appearance} 
        size={size} 
        disabled={disabled} 
        loading={loading}
        iconBefore={iconBefore}
        iconAfter={iconAfter}
    >
        {text}
    </StyledButton>;
};