import React from 'react'
import { shallow } from 'enzyme'
import { MemoryRouter } from "react-router-dom"
import '../../setupTests'
import nock from 'nock'

import SearchUser from './searchUser'

describe('<SearchUser />', () => {

    it('renders search User', () => {
        let wrapper = shallow(
            <MemoryRouter initialEntries={[ '/search', { user: 'jacobsenanaizabel' } ]} initialIndex={0}>
                <SearchUser/>
            </MemoryRouter>
        );
    })

    it('return list users', () => {

        let user = 'jacobsenanaizabel';

        var userResponse = 
        {
            "total_count": 1,
            "incomplete_results": false,
            "items": [
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
                    "score": 95.23877
                }
            ]
        }

        nock('https://api.github.com')
            .get('/search/users?q=/'+ user)
            .reply(200, userResponse);
    })

})