'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mihin-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-3d3016f6eb15bdc02e1a02b5fca3cf39"' : 'data-target="#xs-components-links-module-AdminModule-3d3016f6eb15bdc02e1a02b5fca3cf39"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-3d3016f6eb15bdc02e1a02b5fca3cf39"' :
                                            'id="xs-components-links-module-AdminModule-3d3016f6eb15bdc02e1a02b5fca3cf39"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginAdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginAdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageOrdersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageServicesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageServicesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageUsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageUsersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterSubAdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterSubAdminComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRouterModule.html" data-type="entity-link" >AdminRouterModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-17bbb9c93c997a4f84fa909cb9621d78"' : 'data-target="#xs-components-links-module-AppModule-17bbb9c93c997a4f84fa909cb9621d78"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-17bbb9c93c997a4f84fa909cb9621d78"' :
                                            'id="xs-components-links-module-AppModule-17bbb9c93c997a4f84fa909cb9621d78"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BoardAdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoardAdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BoardModeratorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoardModeratorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BoardUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoardUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactUsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactUsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuestionAnswerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestionAnswerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterWorkerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterWorkerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrationWorkerTermsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistrationWorkerTermsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchWorkerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchWorkerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServiceCardListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceCardListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WhoUsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WhoUsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkerProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkerProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-17bbb9c93c997a4f84fa909cb9621d78"' : 'data-target="#xs-pipes-links-module-AppModule-17bbb9c93c997a4f84fa909cb9621d78"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-17bbb9c93c997a4f84fa909cb9621d78"' :
                                            'id="xs-pipes-links-module-AppModule-17bbb9c93c997a4f84fa909cb9621d78"' }>
                                            <li class="link">
                                                <a href="pipes/BrithdayToAgePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BrithdayToAgePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MdbKitModule.html" data-type="entity-link" >MdbKitModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdminService.html" data-type="entity-link" >AdminService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthUserService.html" data-type="entity-link" >AuthUserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactUsService.html" data-type="entity-link" >ContactUsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuestionAnswerServieService.html" data-type="entity-link" >QuestionAnswerServieService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServiceUsService.html" data-type="entity-link" >ServiceUsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenStorageService.html" data-type="entity-link" >TokenStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserServService.html" data-type="entity-link" >UserServService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminAuthGuard.html" data-type="entity-link" >AdminAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserAuthGuard.html" data-type="entity-link" >UserAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/WorkerAuthGuard.html" data-type="entity-link" >WorkerAuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/QuestionAnswerInterface.html" data-type="entity-link" >QuestionAnswerInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServiceUs.html" data-type="entity-link" >ServiceUs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserLogin.html" data-type="entity-link" >UserLogin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserRegister.html" data-type="entity-link" >UserRegister</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserRegister-1.html" data-type="entity-link" >UserRegister</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});