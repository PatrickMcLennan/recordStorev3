import { gql } from "apollo-boost";

export const LOG_IN: any = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
