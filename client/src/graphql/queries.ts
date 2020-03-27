import { gql } from "apollo-boost";

export const LOG_IN: any = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const CREATE_ACCOUNT: any = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
