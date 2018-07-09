import React from 'react'
import { shallow } from 'enzyme'
import { MemoryRouter } from "react-router-dom"
import '../../setupTests'
import nock from 'nock'

import Profile from './profile'

describe('<Profile />', () => {

    it('renders user profile', () => {
        let wrapper = shallow(
            <MemoryRouter initialEntries={[ '/profile', { user: 'jacobsenanaizabel' } ]} initialIndex={0}>
                <Profile/>
            </MemoryRouter>
        );
    })

    it('return list users', () => {

        let user = 'jacobsenanaizabel';

        var userResponse = 
        {
            "login": "jacobsenanaizabel",
            "id": 13037895,
            "node_id": "MDQ6VXNlcjEzMDM3ODk1",
            "avatar_url": "https://avatars1.githubusercontent.com/u/13037895?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/jacobsenanaizabel",
            "html_url": "https://github.com/jacobsenanaizabel",
            "followers_url": "https://api.github.com/users/jacobsenanaizabel/followers",
            "following_url": "https://api.github.com/users/jacobsenanaizabel/following{/other_user}",
            "gists_url": "https://api.github.com/users/jacobsenanaizabel/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/jacobsenanaizabel/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/jacobsenanaizabel/subscriptions",
            "organizations_url": "https://api.github.com/users/jacobsenanaizabel/orgs",
            "repos_url": "https://api.github.com/users/jacobsenanaizabel/repos",
            "events_url": "https://api.github.com/users/jacobsenanaizabel/events{/privacy}",
            "received_events_url": "https://api.github.com/users/jacobsenanaizabel/received_events",
            "type": "User",
            "site_admin": false,
            "name": "Ana Izabel Jacobsen",
            "company": null,
            "blog": "https://www.facebook.com/jacobsenana",
            "location": "Rio de Janeiro ",
            "email": null,
            "hireable": null,
            "bio": null,
            "public_repos": 29,
            "public_gists": 0,
            "followers": 14,
            "following": 23,
            "created_at": "2015-06-24T18:21:55Z",
            "updated_at": "2018-07-02T17:12:45Z"
        }

        nock('https://api.github.com')
            .get('/users/'+ user)
            .reply(200, userResponse);
    })

})