var ROUTES_INDEX = {
  name: '<root>',
  kind: 'module',
  className: 'AppModule',
  children: [
    {
      name: 'routes',
      filename: 'src/app/app-routing.module.ts',
      module: 'AppRoutingModule',
      children: [
        { path: '', redirectTo: '/pagar', pathMatch: 'full' },
        {
          path: 'pagar',
          loadChildren: './pages/payment/payment.module#PaymentModule',
          children: [{ kind: 'module', children: [], module: 'PaymentModule' }]
        },
        { path: '404', redirectTo: '' },
        { path: '**', redirectTo: '' }
      ],
      kind: 'module'
    }
  ]
};
