import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router: Router = inject(Router);
  const session = sessionStorage.getItem("loggedInUser")
  const termsCondition = localStorage.getItem("termsCondition")
  if (session && termsCondition) {
    return true;
  }else{
    router.navigate(['/']).then(() => {
      window.location.reload()
    });
return false
  }
};
