import { BooleanInput } from '@angular/cdk/coercion';
import { TemplatePortal } from '@angular/cdk/portal';
import { ElementRef, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class MdbTabComponent implements OnInit {
    private _elementRef;
    private _renderer;
    private _vcr;
    _lazyContent: TemplateRef<any>;
    _titleContent: TemplateRef<any>;
    _content: TemplateRef<any>;
    readonly activeStateChange$: Subject<boolean>;
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    title: string;
    get active(): boolean;
    get content(): TemplatePortal | null;
    get titleContent(): TemplatePortal | null;
    get shouldAttach(): boolean;
    private _contentPortal;
    private _titlePortal;
    set active(value: boolean);
    private _active;
    constructor(_elementRef: ElementRef, _renderer: Renderer2, _vcr: ViewContainerRef);
    ngOnInit(): void;
    private _createContentPortal;
    private _createTitlePortal;
    static ngAcceptInputType_disabled: BooleanInput;
    static ɵfac: i0.ɵɵFactoryDeclaration<MdbTabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MdbTabComponent, "mdb-tab", never, { "disabled": "disabled"; "title": "title"; }, {}, ["_lazyContent", "_titleContent"], ["*"]>;
}
