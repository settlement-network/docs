"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5053],{528:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=i(4848),r=i(8453);const a={},s="Particle Network with ZKM Integration",o={id:"hybrid/particle-zkm",title:"Particle Network with ZKM Integration",description:"Overview of the Category",source:"@site/docs/hybrid/particle-zkm.md",sourceDirName:"hybrid",slug:"/hybrid/particle-zkm",permalink:"/docs/hybrid/particle-zkm",draft:!1,unlisted:!1,editUrl:"https://github.com/zkMIPS/settlement-network/tree/main/docs/hybrid/particle-zkm.md",tags:[],version:"current",frontMatter:{},sidebar:"architectureSidebar",previous:{title:"Hyperlane with ZKM Integration",permalink:"/docs/hybrid/hyperlane-zkm"},next:{title:"THORChain with ZKM Integration",permalink:"/docs/hybrid/thorchain-zkm"}},c={},l=[{value:"Overview of the Category",id:"overview-of-the-category",level:2},{value:"Category: Cross-Chain Universal Accounts with Zero-Knowledge Proofs",id:"category-cross-chain-universal-accounts-with-zero-knowledge-proofs",level:3},{value:"Related Information",id:"related-information",level:2},{value:"Key Features of Particle Network with ZKM Integration",id:"key-features-of-particle-network-with-zkm-integration",level:3},{value:"Architectural Diagrams",id:"architectural-diagrams",level:2},{value:"Particle Network Universal Account Flow with ZKM",id:"particle-network-universal-account-flow-with-zkm",level:3},{value:"Particle Network L1 and Validator Interaction with ZKM",id:"particle-network-l1-and-validator-interaction-with-zkm",level:3},{value:"Architectural Advantages",id:"architectural-advantages",level:2},{value:"Architectural Disadvantages",id:"architectural-disadvantages",level:2},{value:"Categorization in Settlement Network Types",id:"categorization-in-settlement-network-types",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"particle-network-with-zkm-integration",children:"Particle Network with ZKM Integration"}),"\n",(0,t.jsx)(n.h2,{id:"overview-of-the-category",children:"Overview of the Category"}),"\n",(0,t.jsxs)(n.p,{children:["Particle Network, enhanced by Zero-Knowledge Machine (ZKM) integration, primarily falls under the ",(0,t.jsx)(n.strong,{children:"External Verification"})," category of settlement networks. It utilizes its own L1 blockchain (Particle Network L1) in addition to the chains where assets are transferred, making it externally verified. However, it also incorporates aspects of ",(0,t.jsx)(n.strong,{children:"Native Verification"})," through its Universal Accounts system that interacts with multiple chains."]}),"\n",(0,t.jsx)(n.h3,{id:"category-cross-chain-universal-accounts-with-zero-knowledge-proofs",children:"Category: Cross-Chain Universal Accounts with Zero-Knowledge Proofs"}),"\n",(0,t.jsx)(n.p,{children:"Particle Network's primary focus is providing Universal Accounts across multiple blockchains, now enhanced by ZKM's zero-knowledge proofs for improved security, privacy, and efficiency."}),"\n",(0,t.jsx)(n.h2,{id:"related-information",children:"Related Information"}),"\n",(0,t.jsx)(n.h3,{id:"key-features-of-particle-network-with-zkm-integration",children:"Key Features of Particle Network with ZKM Integration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Universal Accounts"}),": Users can interact with dApps on any chain through a single account, now secured by ZK proofs."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Universal Liquidity"}),": Cross-chain asset movement facilitated through atomic swaps, enhanced with ZK-verified transactions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Universal Gas"}),": Users can pay for gas with any token on any chain, with ZK proofs ensuring the integrity of these complex transactions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ZK-Enhanced Validator Nodes"}),": Nodes now use ZK proofs to validate transactions and secure the network more efficiently."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Privacy-Preserving Cross-Chain Interactions"}),": ZKM integration allows for more private and secure cross-chain operations."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"architectural-diagrams",children:"Architectural Diagrams"}),"\n",(0,t.jsx)(n.h3,{id:"particle-network-universal-account-flow-with-zkm",children:"Particle Network Universal Account Flow with ZKM"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD\n    A[User Interaction] --\x3e|ZK-Verified Request| B[Universal Account]\n    B --\x3e|ZK-Monitored by Validators| C[Particle Network L1]\n    C --\x3e|ZK-Verified Cross-Chain Transaction| D[Decentralized Bundler]\n    D --\x3e|ZK-Verified Execution| E[Target Chain]\n    F[Master Keystore Hub] --\x3e|ZK-Verified Account Coordination| B\n    G[Decentralized Messaging Network] --\x3e|ZK-Verified Status Monitoring| C\n    H[ZK-Enhanced Validator Nodes] --\x3e|Validate and Secure| C\n    I[ZKM zkVM] --\x3e|Generate ZK Proofs| H\n    I --\x3e|Verify ZK Proofs| D\n"}),"\n",(0,t.jsx)(n.h3,{id:"particle-network-l1-and-validator-interaction-with-zkm",children:"Particle Network L1 and Validator Interaction with ZKM"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph TD\n    A[Particle Network L1] --\x3e|ZK-Verified State Management| B[Universal Account State]\n    A --\x3e|ZK-Verified Staking| C[ZK-Enhanced Validator Node]\n    B --\x3e|ZK-Verified Updates| D[Cross-Chain Transaction Pool]\n    C --\x3e|Sign with ZK Proofs| E[Transaction Execution]\n    E --\x3e|ZK-Verified Consistency| F[Validator Consensus]\n    F --\x3e|ZK-Verified Settlement| D\n    G[ZKM zkVM] --\x3e|Generate & Verify ZK Proofs| C\n    G --\x3e|Provide ZK Proofs| E\n    H[Dual Staking $PARTI/$BTC] --\x3e|ZK-Verified Security| C\n"}),"\n",(0,t.jsx)(n.h2,{id:"architectural-advantages",children:"Architectural Advantages"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Enhanced Security"}),": ZKM integration provides cryptographic proofs for all operations across Universal Accounts, significantly reducing the risk of fraudulent activities."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Improved Privacy"}),": Zero-knowledge proofs allow for privacy-preserving transactions and cross-chain interactions within Universal Accounts."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Efficient Cross-Chain Interoperability"}),": ZK proofs optimize the verification process for cross-chain transactions, potentially reducing latency in Universal Account operations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Scalability"}),": ZKM enables more efficient state transitions and proofs, allowing Particle Network to handle increased transaction volumes across multiple chains."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reduced Validator Load"}),": ZK proofs can simplify validation processes, potentially lowering the computational requirements for validators in the dual staking system."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"architectural-disadvantages",children:"Architectural Disadvantages"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Increased Complexity"}),": Integrating ZKM adds another layer of complexity to the already complex Universal Account system."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Potential Performance Overhead"}),": While ZK proofs enhance security, they may introduce some computational overhead in cross-chain operations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Integration Challenges"}),": Seamlessly integrating ZKM with existing Particle Network infrastructure and connected chains could pose technical challenges."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Higher Initial Setup Costs"}),": Implementing ZKM may require significant initial investment in development and infrastructure across multiple chains."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Learning Curve"}),": Users and developers may need time to understand and trust the new ZK-enhanced Universal Account processes."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"categorization-in-settlement-network-types",children:"Categorization in Settlement Network Types"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"External Verification"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Particle Network primarily fits here as it uses its own L1 blockchain for settlement of Universal Account transactions."}),"\n",(0,t.jsx)(n.li,{children:"ZKM enhances the external verification process with zero-knowledge proofs across multiple chains."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Related Projects"}),": THORChain, Entangle, Initia, Omni, Cycle Network, Hyperlane"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Native Verification"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Aspects of Particle Network's Universal Accounts system, which interacts directly with connected chains, align with native verification."}),"\n",(0,t.jsx)(n.li,{children:"ZKM integration allows for more efficient native verification on connected chains through the Decentralized Bundler."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Related Projects"}),": Polymer, zkLink"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"Particle Network with ZKM integration represents an advanced cross-chain Universal Account solution that leverages zero-knowledge proofs to enhance security, privacy, and efficiency across multiple blockchains. While primarily an externally verified system through its L1 blockchain, it incorporates strong elements of native verification through its Universal Accounts system, positioning it as a hybrid solution in the settlement network landscape. The integration of ZKM addresses potential security and privacy concerns in cross-chain operations while introducing new possibilities for scalable and efficient blockchain interoperability."}),"\n",(0,t.jsx)(n.p,{children:"Resources"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://particle.network/particle-network-l1.html",children:"https://particle.network/particle-network-l1.html"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(6540);const r={},a=t.createContext(r);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);