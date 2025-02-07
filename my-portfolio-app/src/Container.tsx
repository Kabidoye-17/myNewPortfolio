import styled from "styled-components";

type Props = {
  height?: string;
  width?: string;
  paddingLeft?: string;
  paddingright?: string;
  paddingtop?: string;
  paddingbottom?: string;
  padding?: string;
  borderLeft?: string;
  borderRight?: string;
  borderBottom?: string;
  borderTop?: string;
  border?: string;
  backgroundcolor?: string;
  position?: string;
  alignself?: string;
  alignitems?: string;
  justifyself?: string;
  justifycontent?: string;
  display?: string;
  textalign?: string;
  flexdirection?: string;
  customstyle?: string;
  children?: React.ReactNode;
};

const StyledContainer = styled.div<{
  height?: string;
  width?: string;
  paddingLeft?: string;
  paddingright?: string;
  paddingtop?: string;
  paddingbottom?: string;
  padding?: string;
  borderLeft?: string;
  borderRight?: string;
  borderBottom?: string;
  borderTop?: string;
  border?: string;
  backgroundcolor?: string;
  position?: string;
  alignself?: string;
  alignitems?: string;
  justifyself?: string;
  justifycontent?: string;
  display?: string;
  textalign?: string;
  flexdirection?: string;
  customstyle?: string;
}>`
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
  padding-left: ${({ paddingLeft }) => paddingLeft || '0'};
  padding-right: ${({ paddingright }) => paddingright || '0'};
  padding-top: ${({ paddingtop }) => paddingtop || '0'};
  padding-bottom: ${({ paddingbottom }) => paddingbottom || '0'};
  padding: ${({ padding }) => padding};
  border-left: ${({ borderLeft }) => borderLeft || 'none'};
  border-right: ${({ borderRight }) => borderRight || 'none'};
  border-bottom: ${({ borderBottom }) => borderBottom || 'none'};
  border-top: ${({ borderTop }) => borderTop || 'none'};
  border: ${({ border }) => border };
  background-color: ${({ backgroundcolor }) => backgroundcolor || 'transparent'};
  position: ${({ position }) => position || 'static'};
  align-self: ${({ alignself }) => alignself || 'auto'};
  align-items: ${({ alignitems }) => alignitems};
  justify-self: ${({ justifyself }) => justifyself || 'auto'};
  justify-content: ${({ justifycontent }) => justifycontent};
  text-align: ${({textalign}) => textalign};
  flex-direction: ${({flexdirection}) => flexdirection};
    display: ${({ display }) => display};
  ${({ customstyle }) => customstyle};
`;

export default function Container({
  height,
  width,
  paddingLeft,
  paddingright,
  paddingtop,
  paddingbottom,
  padding,
  borderLeft,
  borderRight,
  borderBottom,
  borderTop,
  border,
  backgroundcolor,
  position,
  alignself,
  alignitems,
  justifyself,
  justifycontent,
  display,
  textalign,
  customstyle,
  children
}: Props){
  return (
    <StyledContainer
      height={height}
      width={width}
      paddingLeft={paddingLeft}
      paddingright={paddingright}
      paddingtop={paddingtop}
      paddingbottom={paddingbottom}
      padding={padding}
      backgroundcolor={backgroundcolor}
      position={position}
      alignself={alignself}
      alignitems={alignitems}
      justifyself={justifyself}
      justifycontent={justifycontent}
      customstyle={customstyle}
      borderLeft={borderLeft}
      borderRight={borderRight}
      borderBottom={borderBottom}
      borderTop={borderTop}
      border={border}
      textalign={textalign}
      display={display}
    >
      {children}
    </StyledContainer>
  );
}
