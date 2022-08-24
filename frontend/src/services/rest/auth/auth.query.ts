import { useMutation } from "@tanstack/react-query";
import { AuthService } from "./auth.service";

export const useLoginMutation = () => {
  return useMutation((input) => {
    return AuthService.login(input);
  });
};
