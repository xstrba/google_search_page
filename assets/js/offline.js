/////////////////////////////////////////////////
// File for giving simpe results for debugging //
// without using gapi                          //
// Created by: Boris Strbak                    //
/////////////////////////////////////////////////

"use strict";

var dataImages = {
        items: [
            {
                image: {
                    thumbnailLink: 'assets/pics/app-icon.png',
                    height: 500,
                    width: 500,
                },
                title: 'icon1',
                link: 'assets/pics/app-icon.png',
            },
            {
                image: {
                    thumbnailLink: 'assets/pics/app-icon.png',
                    height: 500,
                    width: 500,
                },
                title: 'icon2',
                link: 'assets/pics/app-icon.png',
            },
            {
                image: {
                    thumbnailLink: 'assets/pics/app-icon.png',
                    height: 500,
                    width: 500,
                },
                title: 'icon3',
                link: 'assets/pics/app-icon.png',
            },
            {
                image: {
                    thumbnailLink: 'assets/pics/app-icon.png',
                    height: 500,
                    width: 500,
                },
                title: 'icon4',
                link: 'assets/pics/app-icon.png',
            },
            {
                image: {
                    thumbnailLink: 'assets/pics/app-icon.png',
                    height: 500,
                    width: 500,
                },
                title: 'icon5',
                link: 'assets/pics/app-icon.png',
            },
            {
                image: {
                    thumbnailLink: 'assets/pics/app-icon.png',
                    height: 500,
                    width: 500,
                },
                title: 'icon6',
                link: 'assets/pics/app-icon.png',
            },
            {
                image: {
                    thumbnailLink: 'assets/pics/app-icon.png',
                    height: 500,
                    width: 500,
                },
                title: 'icon7',
                link: 'assets/pics/app-icon.png',
            },
            {
                image: {
                    thumbnailLink: 'assets/pics/app-icon.png',
                    height: 500,
                    width: 500,
                },
                title: 'icon8',
                link: 'assets/pics/app-icon.png',
            },
            {
                image: {
                    thumbnailLink: 'assets/pics/app-icon.png',
                    height: 500,
                    width: 500,
                },
                title: 'icon9',
                link: 'assets/pics/app-icon.png',
            },
            {
                image: {
                    thumbnailLink: 'assets/pics/app-icon.png',
                    height: 500,
                    width: 500,
                },
                title: 'icon10',
                link: 'assets/pics/app-icon.png',
            },
            {
                image: {
                    thumbnailLink: 'assets/pics/app-icon.png',
                    height: 500,
                    width: 500,
                },
                title: 'icon11',
                link: 'assets/pics/app-icon.png',
            },
            {
                image: {
                    thumbnailLink: 'assets/pics/app-icon.png',
                    height: 500,
                    width: 500,
                },
                title: 'icon12',
                link: 'assets/pics/app-icon.png',
            },
        ],
};

var dataWebs = {
        items: [
            {
                htmlTitle: 'example',
                link: 'example.com',
                snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
                htmlTitle: 'examplemaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxs',
                link: 'example.commaxxxxxxxxxxxxxxxx'
                +'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxs',
                snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
                htmlTitle: 'example',
                link: 'example.com',
                snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
                htmlTitle: 'example',
                link: 'example.com',
                snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
                htmlTitle: 'example',
                link: 'example.com',
                snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
                htmlTitle: 'example',
                link: 'example.com',
                snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
                htmlTitle: 'example',
                link: 'example.com',
                snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
                htmlTitle: 'example',
                link: 'example.com',
                snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
                htmlTitle: 'example',
                link: 'example.com',
                snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
                htmlTitle: 'example',
                link: 'example.com',
                snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
        ],
};

function offSearch() {

    handleResponseImages(dataImages);
    handleResponseWebs(dataWebs);

    return;
}
