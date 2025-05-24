//! More technique to get best output from al LLM -

			//! 01. Multi-step prompts - breaks complex requests into managable steps for through response

			// Exmaple : 
			// "I want to write a business plan for a new coffee shop. Before you generate the plan, ask me at least 5 clarifying questions about my vision, target market, and budget to ensure the plan is tailored to my needs."

			//! 02. Reverse prompting - Ask the AI to create prompts or questions leading to a specific topic, offering a fresh angle 

			//! 03.constraint-driven specificity
			// Requirements:
			/*- Must be under 500 words
			- Include exactly 3 actionable recommendations
			- Cite specific data or studies
			- Avoid jargon; write for a general audience
			- End with one thought-provoking question
				*/
			//! 04. Persona + Context + Task (PCT) framework
			/*
			
			PERSONA: You are [specific expert role]
			CONTEXT: Given [relevant background/situation]
			TASK: [Specific deliverable] that [meets these criteria]
			
			*/

			//! 05. Negative prompting for quality control
			/* Do NOT:
			- Provide generic advice
			- Use placeholder text
			- Give incomplete examples
			- Assume unstated requirements
			- Skip error handling considerations
			*/

			//! 06. output format templates

			/*

			Provide your response in this exact format:

			## Summary (2-3 sentences)
			## Detailed Analysis
			- Key Finding 1: [Evidence]
			- Key Finding 2: [Evidence]
			## Recommendations
			1. [Action] - [Expected outcome]
			## Next Steps
			 */

			//! 07. iterative refinement prompting 
			/* 
				First , provide your intial response. 
				Then, critique your own response for :
				-completness
				-accuracy
				-clarity
				-actinability
			Finally, provide an improved version addressing any weaknesses.

			*/ 

			//! 08. context window maximization

			/*
			Here's the full context you need to know:
			[Detailed background]
			[Relevant constraints]
			[Success criteria]
			[Available resources]

			With this complete picture, now [specific task].
						*/

			//! 09. validation and self-correction
			/*

			After generating your response, validate it by:
			1. Does it directly address the core question?
			2. Are all claims supported by evidence?
			3. Is it actionable and specific?
			4. Would an expert in this field approve?

			If any answer is "no," revise accordingly.
			*/

			//! 10. Perpespective multiplexing 

			/*
			Analyze this from three perspectives:
			1. Technical expert: [Focus on implementation]
			2. Business stakeholder: [Focus on ROI and risks]  
			3. End user: [Focus on usability and value]

			Synthesize these viewpoints into a comprehensive recommendation. 
			*/
			//! 11. Meta-prompting for complex tasks

			//! 12. Chain of thought's with explicit resoning steps 
			// Before providing your final answer, work through this step-by-step:
			// 1. Analyze the core problem
			// 2. Identify key constraints and requirements
			// 3. Consider potential approaches and trade-offs
			// 4. Select the optimal solution with justification
			// 5. Provide implementation details