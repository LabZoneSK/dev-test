interface IProps {
    justify: string
    align: string
}

export const flex = ({justify, align}: IProps) => `
  display:flex;
  justify-content:${justify || "normal"};
  align-items:${align || "normal"};
`;
